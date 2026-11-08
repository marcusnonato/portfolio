"use client";

import { TechSlider } from "../tech-slider";
import { Contact } from "../contact";
import Projects from "../projects";
import Header from "../header";
import { About } from "../about";
import Carrer from "../carrer";
import { ScrollCta } from "../scroll-cta";
import { Footer } from "../footer";
import { Hero, HeroBackdrop } from "../hero";
import { Preloader } from "../preloader";
import { LightRays } from "../ui/light-rays";
import { BackToTop } from "../back-to-top";

export default function Main() {
  return (
    <main id="main" className="relative min-h-screen">
      <Preloader />
      <Header />

      {/* primeira dobra: hero + marquee colado no rodapé, em 100svh */}
      <section
        id="home"
        className="bg-bg relative z-10 flex min-h-svh w-full flex-col pb-16 text-white md:pb-0"
      >
        <LightRays color="rgba(255, 255, 255, 0.089)" />
        <HeroBackdrop />
        <div className="flex flex-1 items-center px-6 pt-24 pb-8 md:px-12 md:pb-12 lg:px-36">
          <Hero />
        </div>
        <TechSlider />
      </section>

      <About />
      <ScrollCta />

      <div className="relative z-20 -mt-24">
        <Projects />
      </div>
      <Carrer />
      <Contact />
      <Footer />

      <BackToTop />
    </main>
  );
}
