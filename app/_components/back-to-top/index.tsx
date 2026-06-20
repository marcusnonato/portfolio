"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const viewportBottom = latest + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    setIsVisible(viewportBottom >= pageHeight - 100);
  });

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -180 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: -180 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformPerspective: 600 }}
          className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#8aee14]/40 bg-zinc-950/80 text-[#8aee14] shadow-lg backdrop-blur-sm transition-colors hover:border-[#8aee14] hover:bg-[#8aee14] hover:text-zinc-950 md:right-10 md:bottom-10"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
