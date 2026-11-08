"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { SECTIONS } from "../header";

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg relative pb-[calc(10rem+env(safe-area-inset-bottom))] text-white md:pb-10">
      <div className="px-6 md:px-12 lg:px-36">
        <div className="border-line flex flex-col items-center gap-8 border-t pt-10 md:flex-row md:justify-between">
          <Link
            href="#home"
            aria-label="Marcus Vinicius — Home"
            className="relative h-12 w-12"
          >
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="48px"
              className="object-contain"
            />
          </Link>

          <nav aria-label={t.nav.label}>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {SECTIONS.map(({ id }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {t.nav[id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-center text-sm text-zinc-400">
            © {year} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
