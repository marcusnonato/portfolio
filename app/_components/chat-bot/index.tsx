"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Loader2, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Markdown from "react-markdown";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const INITIAL_MESSAGE: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Olá! Sou o assistente virtual do Marcus. Posso te contar sobre a experiência dele, habilidades, projetos ou como entrar em contato. O que você quer saber?",
    },
  ],
};

const SUGGESTIONS = [
  "Qual a experiência atual do Marcus?",
  "Que tecnologias ele domina?",
  "Quais projetos ele já fez?",
  "Como entro em contato?",
];

function getMessageText(message: UIMessage): string {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("");
}

const HINT_TEXT = "Ficou com alguma dúvida? Converse com a minha versão IA!!";

// Quanto tempo (ms) o balão fica visível antes de sumir sozinho.
const HINT_DURATION = 8000;

function TypingHint({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    setCount(0);
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [text]);

  const done = count >= text.length;

  return (
    <>
      {text.slice(0, count)}
      {!done && (
        <span className="ml-px inline-block h-4 w-px translate-y-0.5 animate-pulse bg-gray-300" />
      )}
    </>
  );
}

function MarkdownMessage({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-2 [&_a]:text-emerald-400 [&_a]:underline [&_li]:ml-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5">
      <Markdown
        components={{
          a: ({ ...props }) => (
            <a target="_blank" rel="noopener noreferrer" {...props} />
          ),
        }}
      >
        {text}
      </Markdown>
    </div>
  );
}

function AssistantAvatar() {
  return (
    <div className="relative h-8 w-8 shrink-0 self-end">
      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15">
        <Image
          src="/me.jpg"
          alt="Foto do Marcus"
          fill
          sizes="32px"
          className="object-cover"
        />
      </div>
      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full border border-zinc-950 bg-emerald-400" />
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [hintActive, setHintActive] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setTimeout(() => setHintActive(false), HINT_DURATION);
    return () => clearTimeout(id);
  }, []);

  const hintVisible = hintActive && !open;

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: [INITIAL_MESSAGE],
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="fixed top-20 right-5 z-40 flex items-start gap-2.5 md:top-24 md:right-8">
        <AnimatePresence>
          {hintVisible && (
            <motion.button
              key="hint"
              type="button"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, scale: 0.8, x: 16 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 16 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="max-w-[15rem] rounded-2xl rounded-tr-sm border border-white/10 bg-zinc-900 px-4 py-3 text-left text-sm leading-snug text-gray-100 shadow-lg shadow-black/40"
            >
              <TypingHint text={HINT_TEXT} />
            </motion.button>
          )}
        </AnimatePresence>

        <SheetTrigger asChild>
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Abrir chat com assistente virtual"
            className="group relative h-9 w-9 shrink-0 rounded-full border border-white/20 shadow-lg shadow-black/40 transition-colors hover:border-white/40 md:h-10 md:w-10"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                src="/me.jpg"
                alt="Foto do Marcus"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="absolute -top-0.5 -right-0.5 z-10 h-3 w-3 rounded-full border-2 border-zinc-950 bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
            </span>
          </motion.button>
        </SheetTrigger>
      </div>

      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-l border-white/10 bg-zinc-950 p-0 text-white sm:max-w-md"
      >
        <SheetHeader className="border-b border-white/10 p-5">
          <SheetTitle className="flex flex-col text-white">
            <span className="text-base font-semibold">Assistente Virtual</span>
            <span className="flex items-center gap-1.5 text-xs font-normal text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Online — responde sobre o Marcus
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <div className="flex flex-col gap-4">
            <AnimatePresence initial={false}>
              {messages.map((message) => {
                const text = getMessageText(message);
                const isUser = message.role === "user";
                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!isUser && <AssistantAvatar />}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        isUser
                          ? "rounded-br-sm bg-white whitespace-pre-wrap text-zinc-950"
                          : "rounded-bl-sm border border-white/10 bg-zinc-900 text-gray-100"
                      }`}
                    >
                      {text ? (
                        isUser ? (
                          text
                        ) : (
                          <MarkdownMessage text={text} />
                        )
                      ) : (
                        <span className="inline-flex items-center gap-1 text-gray-400">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          pensando...
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {isLoading &&
              messages[messages.length - 1]?.role === "user" && (
                <div className="flex items-end justify-start gap-2">
                  <AssistantAvatar />
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-gray-400">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    pensando...
                  </div>
                </div>
              )}

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-200">
                {error.message ||
                  "Algo deu errado. Tente novamente em instantes."}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {messages.length <= 1 && (
          <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-3">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSend(suggestion)}
                disabled={isLoading}
                className="rounded-full border border-white/15 bg-zinc-900 px-3 py-1.5 text-xs text-gray-200 transition-colors hover:border-white/40 hover:bg-zinc-800 disabled:opacity-50"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-white/10 p-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte algo sobre o Marcus..."
            disabled={isLoading}
            className="flex-1 rounded-full border border-white/10 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            aria-label="Enviar mensagem"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-950 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
