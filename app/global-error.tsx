"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950">
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-white">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-5xl font-bold text-red-500">500</h1>
            <h2 className="mb-4 text-3xl font-bold">Erro Crítico</h2>
            <p className="mb-6 text-lg text-gray-300">
              Ocorreu um erro crítico na aplicação. Por favor, tente recarregar
              a página.
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
              <button
                onClick={() => (window.location.href = "/")}
                className="rounded-2xl border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-black"
              >
                Recarregar página
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
