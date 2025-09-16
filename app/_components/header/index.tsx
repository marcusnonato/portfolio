"use client";

import { useState, useEffect } from "react";
import { Home, User, Folder, Users } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "socialmedia"];
      const scrollPosition = window.scrollY + 100;

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-8 left-1/2 z-[30] flex w-fit -translate-x-1/2 items-center justify-between rounded-2xl border border-gray-600 bg-neutral-900 px-4 py-2 text-white opacity-70 shadow-lg transition-opacity duration-[400ms] ease-in-out hover:opacity-100">
      <nav className="flex cursor-pointer items-center gap-2">
        <div className="group relative inline-block">
          <a
            href="#home"
            className={`flex items-center gap-2 rounded-t-lg p-4 transition-colors duration-200 hover:bg-zinc-600 md:p-4 ${
              activeSection === "home"
                ? "border-b-2 border-blue-400 bg-blue-900/70 text-blue-400"
                : ""
            }`}
          >
            <Home size={18} />
          </a>
          <span className="pointer-events-none invisible absolute -bottom-4 z-10 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            Home
          </span>
        </div>

        <div className="group relative inline-block">
          <a
            href="#about"
            className={`flex items-center gap-2 rounded-t-lg p-4 transition-colors duration-200 hover:bg-zinc-600 md:p-4 ${
              activeSection === "about"
                ? "border-b-2 border-blue-400 bg-blue-900/70 text-blue-400"
                : ""
            }`}
          >
            <User size={18} />
          </a>
          <span className="pointer-events-none invisible absolute -bottom-4 z-10 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            About
          </span>
        </div>

        <div className="group relative inline-block">
          <a
            href="#projects"
            className={`flex items-center gap-2 rounded-t-lg p-4 transition-colors duration-200 hover:bg-zinc-600 md:p-4 ${
              activeSection === "projects"
                ? "border-b-2 border-blue-400 bg-blue-900/70 text-blue-400"
                : ""
            }`}
          >
            <Folder size={18} />
          </a>
          <span className="pointer-events-none invisible absolute -bottom-4 z-10 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            Projects
          </span>
        </div>

        <div className="group relative inline-block">
          <a
            href="#socialmedia"
            className={`flex items-center gap-2 rounded-t-lg p-4 transition-colors duration-200 hover:bg-zinc-600 md:p-4 ${
              activeSection === "socialmedia"
                ? "border-b-2 border-blue-400 bg-blue-900/70 text-blue-400"
                : ""
            }`}
          >
            <Users size={18} />
          </a>
          <span className="pointer-events-none invisible absolute -bottom-4 z-10 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            Social media
          </span>
        </div>
      </nav>
    </header>
  );
}
