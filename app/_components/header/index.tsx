"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "motion/react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollY } = useScroll();
  const [scrollInY, setScrollInY] = useState<any>(0);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sections = ["home", "about", "projects", "socialmedia"];
    const scrollPosition = latest + 100;
    setScrollInY(latest);

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const offsetTop = el.offsetTop;
        const offsetHeight = el.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    }
  });

  const navItems = [
    { href: "#home", label: "Home", section: "home" },
    { href: "#about", label: "Sobre", section: "about" },
    { href: "#projects", label: "Projetos", section: "projects" },
    { href: "#socialmedia", label: "Redes Sociais", section: "socialmedia" },
  ];

  return (
    <header
      className={`sticky z-50 flex w-full items-center transition-all duration-300 ${scrollInY > 800 ? "-top-24" : "top-4"}`}
    >
      <div
        className={`flex w-full items-center justify-between rounded-2xl border border-transparent px-4 transition-all duration-500 ${scrollInY > 100 ? "mx-4 border-zinc-800 bg-zinc-950 md:mx-20 lg:mx-96" : "mx-4 md:mx-12 lg:mx-32"}`}
      >
        <div className="relative h-12 w-12 md:h-16 md:w-16">
          <Image alt="Logo" src="/logo.png" fill className="object-contain" />
        </div>

        <nav className="hidden gap-8 md:flex lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.section}
              href={item.href}
              className={`pb-1 transition-all ${
                activeSection === item.section
                  ? "border-b-2 border-[#8aee14]"
                  : "border-b-2 border-transparent hover:border-gray-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <p className="text-sm">PT-BR</p>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="rounded-lg p-2 text-white hover:bg-zinc-800"
              aria-label="Abrir menu de navegação"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-zinc-950 text-white"
          >
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.section}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg transition-all ${
                    activeSection === item.section
                      ? "border-l-4 border-[#8aee14] pl-4 font-semibold text-[#8aee14]"
                      : "pl-4 text-gray-300 hover:border-l-4 hover:border-gray-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-zinc-800 pt-4 pl-4">
                <p className="text-sm text-gray-400">PT-BR</p>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
