import Image from "next/image";

export const SocialMedia = () => {
  return (
    <>
      <div className="relative z-10 -mt-px h-0 w-full bg-gradient-to-b from-black/60 to-transparent" />

      <section
        id="socialmedia"
        className="relative bg-zinc-950 py-20 text-white before:absolute before:top-0 before:left-0 before:h-0.5 before:w-full before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:content-['']"
      >
        <div className="mx-auto px-4 md:px-10 lg:px-36">
          <div className="mb-15">
            <h2 className="animate-fade-up mb-4 text-5xl font-bold text-white [animation-delay:0.2s] [animation-fill-mode:backwards] md:text-4xl">
              Redes Sociais
            </h2>
            <p className="animate-fade-up mb-12 text-xl text-gray-300 [animation-delay:0.4s] [animation-fill-mode:backwards] md:text-lg">
              Encontre-me nas redes sociais e acompanhe meu trabalho
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              <a
                href="https://github.com/marcusnonato/"
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-up relative flex items-center overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-6 text-white no-underline backdrop-blur-sm transition-all duration-300 [animation-delay:0.6s] [animation-fill-mode:backwards] before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 before:content-[''] hover:-translate-y-1 hover:border-gray-700 hover:shadow-[0_20px_40px_rgba(51,51,51,0.3)] hover:before:left-full"
              >
                <Image
                  src="/github.png"
                  alt="Logo do GitHub"
                  width={48}
                  height={48}
                  className="mr-5 h-12 w-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex flex-1 flex-col">
                  <span className="mb-1 text-xl font-semibold">GitHub</span>
                  <span className="text-sm text-gray-300">
                    Meus projetos e código
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/marcusnonato/"
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-up relative flex items-center overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-6 text-white no-underline backdrop-blur-sm transition-all duration-300 [animation-delay:0.6s] [animation-fill-mode:backwards] before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 before:content-[''] hover:-translate-y-1 hover:border-blue-600 hover:shadow-[0_20px_40px_rgba(0,119,181,0.3)] hover:before:left-full"
              >
                <Image
                  src="/linkedin.png"
                  alt="Logo do LinkedIn"
                  width={48}
                  height={48}
                  className="mr-5 h-12 w-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex flex-1 flex-col">
                  <span className="mb-1 text-xl font-semibold">LinkedIn</span>
                  <span className="text-sm text-gray-300">
                    Carreira e networking
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/5592995263569"
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-up hover:shadow-[0_20px_40px_rgba(0, 255, 34, 0.3)] relative flex items-center overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-6 text-white no-underline backdrop-blur-sm transition-all duration-300 [animation-delay:0.6s] [animation-fill-mode:backwards] before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-all before:duration-500 before:content-[''] hover:-translate-y-1 hover:border-green-600 hover:before:left-full"
              >
                <Image
                  src="/whatsapp.png"
                  alt="Logo do WhatsApp"
                  width={48}
                  height={48}
                  className="mr-5 h-12 w-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex flex-1 flex-col">
                  <span className="mb-1 text-xl font-semibold">Whatsapp</span>
                  <span className="text-sm text-gray-300">
                    Converse diretamente comigo!
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
