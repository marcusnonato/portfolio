import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcus-nonato.me"),
  title: {
    default: "Marcus Nonato - Desenvolvedor Full Stack & Mobile",
    template: "%s | Marcus Nonato",
  },
  description:
    "Desenvolvedor Full Stack & Mobile com 2 anos de experiência especializado em React.js, React Native, Node.js e Kotlin com Spring Boot. Construo aplicações modernas, escaláveis e de alta performance.",
  keywords: [
    "Marcus Nonato",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Mobile",
    "React.js",
    "React Native",
    "Node.js",
    "Kotlin",
    "Spring Boot",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "APIs RESTful",
    "Desenvolvedor Brasil",
  ],
  authors: [{ name: "Marcus Nonato", url: "https://marcus-nonato.me" }],
  creator: "Marcus Nonato",
  publisher: "Marcus Nonato",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcus-nonato.me",
    siteName: "Marcus Nonato Portfolio",
    title: "Marcus Nonato - Desenvolvedor Full Stack & Mobile",
    description:
      "Desenvolvedor Full Stack & Mobile especializado em React.js, React Native, Node.js e Kotlin. Construo aplicações modernas e escaláveis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marcus Nonato - Desenvolvedor Full Stack & Mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Nonato - Desenvolvedor Full Stack & Mobile",
    description:
      "Desenvolvedor Full Stack & Mobile especializado em React.js, React Native, Node.js e Kotlin.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${exo.className} dark antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
