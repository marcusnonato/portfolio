import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, UIMessage } from "ai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import { SYSTEM_PROMPT } from "@/app/_lib/cv-knowledge";

export const runtime = "nodejs";
export const maxDuration = 30;

const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

const ratelimit = hasUpstash
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(10, "1 h"),
      analytics: true,
      prefix: "portfolio-chat",
    })
  : null;

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "anonymous";
}

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "Chat indisponível no momento." },
      { status: 503 },
    );
  }

  if (ratelimit) {
    // Se o Upstash cair (credencial expirada, banco apagado), o chat segue sem limite
    // em vez de devolver 500 para o visitante; o erro fica no log da Vercel.
    try {
      const ip = getClientIp(req);
      const { success, reset } = await ratelimit.limit(ip);
      if (!success) {
        const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
        return Response.json(
          {
            error:
              "Você atingiu o limite de mensagens. Tente novamente em alguns minutos.",
          },
          {
            status: 429,
            headers: { "Retry-After": String(retryAfter) },
          },
        );
      }
    } catch (error) {
      console.error("[chat] rate limit indisponível, seguindo sem limite:", error);
    }
  }

  let messages: UIMessage[];
  try {
    ({ messages } = await req.json());
    if (!Array.isArray(messages)) throw new Error("messages ausente");
  } catch {
    return Response.json({ error: "Mensagem inválida." }, { status: 400 });
  }

  const result = streamText({
    model: openai(process.env.OPENAI_MODEL ?? "gpt-4.1-mini"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    temperature: 0.4,
  });

  return result.toUIMessageStreamResponse({
    onError: (error) => {
      // O detalhe (chave, cota, modelo) vai para o log; o visitante vê só o aviso
      console.error("[chat] erro do modelo:", error);
      return "Não consegui responder agora. Tente de novo em instantes.";
    },
  });
}
