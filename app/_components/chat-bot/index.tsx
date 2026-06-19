"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Bot, Loader2, Send, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

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
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      <SheetTrigger asChild>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Abrir chat com assistente virtual"
          className="group fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-lg shadow-black/40 transition-colors hover:border-white/40 md:right-8 md:bottom-8 md:h-16 md:w-16"
        >
          <Sparkles className="absolute h-3 w-3 -translate-x-4 -translate-y-4 text-white/70 transition-all group-hover:-translate-x-5 group-hover:-translate-y-5 group-hover:text-white" />
          <Bot className="h-6 w-6 text-white md:h-7 md:w-7" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
          </span>
        </motion.button>
      </SheetTrigger>

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
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                        isUser
                          ? "rounded-br-sm bg-white text-zinc-950"
                          : "rounded-bl-sm border border-white/10 bg-zinc-900 text-gray-100"
                      }`}
                    >
                      {text || (
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
