"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "motion/react";
import { AtSign, FolderGit2, House, User } from "lucide-react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollY } = useScroll();
  const [scrollInY, setScrollInY] = useState(0);
  const { t, locale, toggleLocale } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sections = ["home", "about", "projects", "socialmedia"];
    setScrollInY(latest);

    // Usa a posição real na tela (offsetTop é relativo ao offsetParent e
    // quebra quando a seção está dentro de um wrapper posicionado).
    // A seção ativa é a última cujo topo já passou de 40% da altura da tela.
    const probe = window.innerHeight * 0.4;
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= probe) current = id;
    }
    setActiveSection(current);
  });

  const navItems = [
    { href: "#home", label: t.nav.home, section: "home", icon: House },
    { href: "#about", label: t.nav.about, section: "about", icon: User },
    {
      href: "#projects",
      label: t.nav.projects,
      section: "projects",
      icon: FolderGit2,
    },
    {
      href: "#socialmedia",
      label: t.nav.social,
      section: "socialmedia",
      icon: AtSign,
    },
  ];

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <button
      onClick={toggleLocale}
      aria-label="Mudar idioma"
      className={`flex items-center gap-1 text-xs font-medium ${className}`}
    >
      <span className={locale === "pt" ? "text-[#8aee14]" : "text-gray-400"}>
        PT
      </span>
      <span className="text-gray-600">/</span>
      <span className={locale === "en" ? "text-[#8aee14]" : "text-gray-400"}>
        EN
      </span>
    </button>
  );

  return (
    <>
      <header
        className={`fixed z-50 flex w-full items-center transition-all duration-300 ${scrollInY > 800 ? "-top-24" : "top-4"}`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-2xl border border-transparent px-4 transition-all duration-500 ${scrollInY > 100 ? "mx-4 border-zinc-800 bg-zinc-950 md:mx-20 lg:mx-96" : "mx-4 md:mx-12 lg:mx-32"}`}
        >
          <div className="relative h-12 w-12 md:h-16 md:w-16">
            <Image alt="Logo" src="/logo.png" fill className="object-contain" />
          </div>

          <nav className="hidden gap-8 text-[13px] font-medium md:flex lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.section}
                href={item.href}
                className={`pb-1 transition-all ${
                  activeSection === item.section
                    ? "border-b-2 border-[#8aee14] text-white"
                    : "border-b-2 border-transparent text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          <div className="md:hidden">
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* ===== Bottom tabs (mobile) ===== */}
      <nav
        aria-label="Navegação"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        <ul className="grid grid-cols-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.section;
            const Icon = item.icon;
            return (
              <li key={item.section}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative flex flex-col items-center gap-1 pt-3 pb-2.5 text-[11px] font-medium transition-colors ${
                    isActive ? "text-white" : "text-zinc-500"
                  }`}
                >
                  <span
                    className={`absolute top-0 h-0.5 w-8 rounded-full bg-[#8aee14] transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <Icon size={20} strokeWidth={1.75} />
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
