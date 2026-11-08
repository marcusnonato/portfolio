import { cn } from "@/app/_lib/utils";

/** Etiqueta de stack/tecnologia. Mesmo componente em Projetos, Carreira e estudo de caso. */
export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "border-line bg-surface-1 inline-flex items-center rounded-xl border px-3 py-1 text-sm font-medium text-zinc-300 select-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
