"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 text-white">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-4xl font-bold text-red-500">
          Algo deu errado!
        </h2>
        <p className="mb-6 text-lg text-gray-300">
          Desculpe, ocorreu um erro inesperado. Tente novamente.
        </p>
        <div className="mb-6 rounded-lg bg-zinc-900 p-4">
          <p className="text-sm text-gray-400">
            {error.message || "Erro desconhecido"}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-2xl border-2 border-white bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-transparent hover:text-white"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="rounded-2xl border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-black"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
