"use client";

import { TechSlider } from "../TechSlider";
import { SocialFooter } from "../SocialMedia";
import Projects from "../projects";
import Image from "next/image";
import Header from "../header";
import Carrer from "../Carrer";
import { About } from "../About";

export default function Main() {
  return (
    <>
      <section
        id="home"
        className="relative z-10 mb-0 flex min-h-[92vh] w-full flex-col items-center justify-center bg-zinc-950 px-6 text-white md:px-12 lg:px-36"
      >
        <Header />

        <div className="relative z-10 mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col pt-56">
          <Image
            width={50}
            height={50}
            alt="Profile Picture"
            className="mb-4 self-start rounded-full"
            src={"/me.jpg"}
          />
          <div className="flex gap-24">
            <p className="mb-2 text-xl text-white">
              HEY, I'M
              <br />
              MARCUS
              <br />
              NONATO
            </p>
            <div>
              <h1 className="mb-2 text-7xl font-bold">
                Full Stack Developer &
                <br />
                Mobile Developer
              </h1>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/MARCUS_NONATO_CURRICULO.pdf"
                  className="inline-flex origin-bottom items-center justify-center rounded-2xl border-2 border-b-8 border-white px-6 py-3 font-semibold text-white transition-all duration-150 hover:scale-y-95 hover:border-b-4"
                  download
                >
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/marcusnonato/"
                  className="inline-flex origin-bottom items-center justify-center gap-3 rounded-2xl border-2 border-b-8 border-white bg-transparent px-6 py-3 font-semibold text-white transition-all duration-150 hover:scale-y-95 hover:border-b-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin.png"
                    alt="Icon Linkedin"
                    className="h-5 w-5"
                  />
                  Connect with me on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechSlider />
      <About />
      <Projects />
      <Carrer />
      <SocialFooter />
    </>
  );
}
