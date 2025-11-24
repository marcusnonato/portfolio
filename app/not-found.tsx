import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-9xl font-bold text-[#8aee14]">404</h1>
        <h2 className="mb-4 text-3xl font-bold">Página não encontrada</h2>
        <p className="mb-8 text-lg text-gray-300">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-block rounded-2xl border-2 border-white bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-transparent hover:text-white"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
