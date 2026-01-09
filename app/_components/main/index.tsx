"use client";

import { TechSlider } from "../tech-slider";
import { SocialMedia } from "../social-media";
import Projects from "../projects";
import Image from "next/image";
import Header from "../header";
import { About } from "../about";
import Carrer from "../carrer";
import { Particles } from "../ui/particles";
import { ScrollCta } from "../scroll-cta";
import { Footer } from "../footer";

export default function Main() {
  return (
    <main className="relative min-h-screen">
      <Particles
        vy={0.2}
        vx={0.2}
        quantity={150}
        className="absolute inset-0 z-15"
      />

      <Header />

      <section
        id="home"
        className="relative z-10 mb-0 flex min-h-[92vh] w-full flex-col items-center justify-center bg-zinc-950 px-6 text-white md:px-12 lg:px-36"
      >
        <div className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col pt-32 md:pt-56">
          <div className="mb-6 flex items-center gap-4 md:hidden">
            <Image
              width={60}
              height={60}
              alt="Profile Picture"
              className="rounded-full"
              src={"/me.jpg"}
            />
            <p className="text-base text-white">
              HEY, I&apos;M
              <br />
              MARCUS
              <br />
              VINICIUS
            </p>
          </div>

          <Image
            width={50}
            height={50}
            alt="Profile Picture"
            className="mb-4 hidden self-start rounded-full md:block"
            src={"/me.jpg"}
          />

          <div className="flex flex-col gap-6 md:flex-row md:gap-24">
            <p className="mb-2 hidden text-xl text-white md:block">
              HEY, I&apos;M
              <br />
              MARCUS
              <br />
              VINICIUS
            </p>

            <div className="flex-1">
              <h1 className="mb-4 text-3xl font-bold md:mb-2 md:text-5xl lg:text-7xl">
                Desenvolvedor Full Stack &
                <br />
                Mobile
              </h1>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/MARCUS_NONATO_CURRICULO.pdf"
                  className="inline-flex origin-bottom items-center justify-center rounded-2xl border-2 border-b-8 border-white px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:scale-y-95 hover:border-b-4 md:px-6 md:py-3 md:text-base"
                  download
                >
                  Baixe meu currículo
                </a>
                <a
                  href="https://www.linkedin.com/in/marcusnonato/"
                  className="inline-flex origin-bottom items-center justify-center gap-2 rounded-2xl border-2 border-b-8 border-white bg-transparent px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:scale-y-95 hover:border-b-4 md:gap-3 md:px-6 md:py-3 md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.png"
                    alt="Ícone do LinkedIn"
                    width={20}
                    height={20}
                    className="h-4 w-4 md:h-5 md:w-5"
                  />
                  <span className="hidden sm:inline">
                    Conecte-se comigo no LinkedIn
                  </span>
                  <span className="sm:hidden">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
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
