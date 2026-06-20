"use client";

import { TechSlider } from "../tech-slider";
import { SocialMedia } from "../social-media";
import Projects from "../projects";
import Header from "../header";
import { About } from "../about";
import Carrer from "../carrer";
import { ScrollCta } from "../scroll-cta";
import { Footer } from "../footer";
import { Hero } from "../hero";
import { Preloader } from "../preloader";
import { LightRays } from "../ui/light-rays";

export default function Main() {
  return (
    <main className="relative min-h-screen">
      <Preloader />
      <Header />

      <section
        id="home"
        className="relative z-10 mb-0 flex min-h-[100vh] w-full flex-col items-center justify-start bg-zinc-950 px-6 text-white md:justify-center md:px-12 lg:px-36"
      >
        <LightRays color="rgba(255, 255, 255, 0.089)" />
        <Hero />
      </section>

      <TechSlider />
      <div className="mt-6 md:mt-0">
        <About />
      </div>
      <ScrollCta />

      <div className="relative z-20 -mt-[500px] md:-mt-64">
        <Projects />
      </div>
      <Carrer />
      <SocialMedia />
      <Footer />
    </main>
  );
}
