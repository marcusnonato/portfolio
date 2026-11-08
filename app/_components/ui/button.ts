import { cva, type VariantProps } from "class-variance-authority";

/**
 * Botões da marca.
 * - primary: contorno branco + sombra sólida deslocada (efeito 3D de assinatura)
 * - ghost: mesmo tamanho, borda branca/10, para ações secundárias
 * - inverse: o primário sobre fundo claro (banner de transição)
 */
export const buttonVariants = cva(
  "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-semibold tracking-wide uppercase transition-[translate,box-shadow,background-color,border-color] duration-300 ease-out",
  {
    variants: {
      variant: {
        primary:
          "border-white bg-bg text-white shadow-solid hover:translate-y-[3px] hover:shadow-solid-pressed",
        ghost:
          "border-white/10 bg-transparent text-white hover:border-white/30 hover:bg-surface-1",
        inverse:
          "border-bg bg-white text-bg shadow-[0_6px_0_0_var(--bg)] hover:translate-y-[3px] hover:shadow-[0_3px_0_0_var(--bg)]",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
