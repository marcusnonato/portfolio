"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "motion/react";
import { AtSign, Briefcase, FolderGit2, House, User } from "lucide-react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { cn } from "@/app/_lib/utils";

/** Seções na ordem da página: o menu reflete exatamente essa ordem. */
export const SECTIONS = [
  { id: "home", icon: House },
  { id: "about", icon: User },
  { id: "projects", icon: FolderGit2 },
  { id: "career", icon: Briefcase },
  { id: "contact", icon: AtSign },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

/** Seção ativa = a que cruza a linha a 40% da altura da tela. */
function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Header() {
  const { t, locale, toggleLocale } = useLanguage();
  const activeSection = useActiveSection();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // esconde ao rolar para baixo, reaparece ao rolar para cima
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 100);
    setHidden(latest > 800 && latest > previous);
  });

  const navItems = SECTIONS.map((section) => ({
    ...section,
    href: `#${section.id}`,
    label: t.nav[section.id],
  }));

  const LanguageToggle = () => (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t.nav.language}
      className="flex items-center gap-1 rounded-md px-1 py-2 text-xs font-medium"
    >
      <span className={locale === "pt" ? "text-brand" : "text-zinc-400"}>
        PT
      </span>
      <span aria-hidden="true" className="text-zinc-600">
        /
      </span>
      <span className={locale === "en" ? "text-brand" : "text-zinc-400"}>
        EN
      </span>
    </button>
  );

  return (
    <>
      <a
        href="#main"
        className="text-bg fixed top-2 left-2 z-[110] -translate-y-20 rounded-xl bg-white px-4 py-2 text-sm font-semibold focus:translate-y-0"
      >
        {t.nav.skip}
      </a>

      <header
        className={cn(
          "fixed z-50 flex w-full items-center transition-[top] duration-300",
          hidden ? "-top-24" : "top-4",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-2xl border px-4 transition-all duration-500",
            scrolled
              ? "bg-bg/80 mx-4 border-zinc-800 backdrop-blur-md md:mx-12 lg:mx-auto lg:max-w-4xl"
              : "mx-4 border-transparent md:mx-12 lg:mx-32",
          )}
        >
          <Link
            href="#home"
            aria-label="Marcus Vinicius — Home"
            className="relative h-12 w-12 md:h-16 md:w-16"
          >
            <Image
              alt=""
              src="/logo.png"
              fill
              sizes="64px"
              className="object-contain"
            />
          </Link>

          <nav
            aria-label={t.nav.label}
            className="hidden gap-7 text-[13px] font-medium md:flex lg:gap-9"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "border-b-2 pb-1 transition-colors",
                    isActive
                      ? "border-brand text-white"
                      : "border-transparent text-zinc-400 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <LanguageToggle />
        </div>
      </header>

      {/* ===== Bottom tabs (mobile) ===== */}
      <nav
        aria-label={t.nav.label}
        className="bg-bg/95 fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        <ul className="grid grid-cols-5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative flex flex-col items-center gap-1 pt-3 pb-2.5 text-[11px] font-medium transition-colors",
                    isActive ? "text-white" : "text-zinc-400",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "bg-brand absolute top-0 h-0.5 w-8 rounded-full transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
