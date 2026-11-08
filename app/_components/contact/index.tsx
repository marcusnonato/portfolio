"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Check, Copy, MessageCircle } from "lucide-react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { SectionHeading } from "../ui/section-heading";
import { buttonVariants } from "../ui/button";
import { revealProps } from "../ui/reveal";
import { cn } from "@/app/_lib/utils";

const EMAIL = "marcusononato@gmail.com";
const WHATSAPP = "https://wa.me/5592995263569";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/marcusnonato/",
    logo: "/github.png",
    key: "githubDesc",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marcusnonato/",
    logo: "/linkedin.png",
    key: "linkedinDesc",
  },
] as const;

export const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // sem permissão de clipboard: cai no cliente de e-mail
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-line bg-bg relative border-t px-6 py-24 text-white md:px-12 lg:px-36 lg:py-32"
    >
      <SectionHeading
        id="contact-title"
        className="mb-12 lg:mb-16"
        eyebrow={t.contact.eyebrow}
        ghost={t.contact.ghost}
        title={t.contact.heading}
        subtitle={t.contact.subtitle}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* bloco principal */}
        <motion.div
          {...revealProps(0)}
          className="border-line bg-surface-1 flex flex-col justify-between gap-10 rounded-2xl border p-6 md:p-10 lg:col-span-2 lg:p-12"
        >
          <div>
            <h3 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
              {t.contact.ctaTitle}
            </h3>
            <p className="mt-4 max-w-[52ch] text-lg leading-[1.7] text-zinc-400">
              {t.contact.ctaText}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "primary" })}
            >
              <MessageCircle size={16} />
              {t.contact.whatsapp}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={`${t.contact.copyEmail}: ${EMAIL}`}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "normal-case",
              )}
            >
              {copied ? (
                <Check size={16} className="text-brand" />
              ) : (
                <Copy size={16} />
              )}
              <span className="tracking-normal">
                {copied ? t.contact.copied : EMAIL}
              </span>
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? t.contact.copied : ""}
            </span>
          </div>
        </motion.div>

        {/* cards secundários */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              {...revealProps(i + 1)}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-line bg-surface-1 hover:border-brand/40 focus-visible:border-brand/40 flex items-center gap-5 rounded-2xl border p-6 transition-colors duration-300"
            >
              <Image
                src={social.logo}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl"
              />
              <span className="flex flex-1 flex-col">
                <span className="text-xl font-semibold">{social.name}</span>
                <span className="text-sm text-zinc-400">
                  {t.contact[social.key]}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="group-hover:text-brand h-5 w-5 text-zinc-400 transition-[translate,color] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
