"use client";

import { useLanguage } from "@/app/_i18n/LanguageProvider";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-zinc-950 pb-10 text-white">
      <div className="mx-auto px-4 md:px-10 lg:px-36">
        <div className="animate-fade-up border-t border-white/10 pt-10 text-center [animation-delay:0.8s] [animation-fill-mode:backwards]">
          <p className="mb-2 text-base text-gray-300 md:text-sm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
