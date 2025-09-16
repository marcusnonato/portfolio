import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Marcus Nonato - Full Stack Developer",
  description:
    "Full Stack & Mobile Developer especializado em React.js, Node.js e Kotlin",
  keywords: "React, Node.js, TypeScript, Kotlin, Full Stack Developer",
  openGraph: {
    title: "Marcus Nonato - Portfolio",
    description: "Desenvolvedor Full Stack & Mobile",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.className} antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
