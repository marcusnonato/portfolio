import { useState, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import ImageLightbox from "../image-lightbox";
import { MediaGalleryProps } from "@/app/_types";

const MediaGallery = ({ images }: MediaGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    disabled: isDesktop, // Desabilita keen-slider no desktop
    breakpoints: {
      "(max-width: 1023px)": {
        slides: {
          perView: 3.2,
          spacing: 16,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 1.4,
          spacing: 16,
        },
      },
    },
  });

  const closeLightbox = useCallback(() => setSelectedImage(null), []);

  return (
    <>
      <div className="relative w-full py-2">
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform duration-300 hover:scale-95"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative h-[180px] w-full rounded-xl border border-gray-400 p-2 shadow-[0_8px_18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <Image
                  src={img}
                  alt={`Imagem do projeto ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          ref={sliderRef}
          className="keen-slider flex w-full flex-nowrap gap-4 overflow-hidden lg:hidden [&_.keen-slider__slide]:flex [&_.keen-slider__slide]:flex-none [&_.keen-slider__slide]:items-center [&_.keen-slider__slide]:justify-center"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="keen-slider__slide cursor-pointer transition-transform duration-300 hover:scale-95"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative h-[200px] w-full max-w-[250px] rounded-xl border border-gray-400 p-2 shadow-[0_8px_18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <Image
                  src={img}
                  alt={`Imagem do projeto ${index + 1}`}
                  fill
                  sizes="250px"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {slider && slider.current && !isDesktop && (
          <>
            <button
              className="absolute top-1/2 left-[-10px] flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-700 bg-gray-900 p-2 text-white transition-colors duration-200 hover:bg-gray-700"
              onClick={() => slider.current?.prev()}
              aria-label="Imagem anterior"
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-[-10px] flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-700 bg-gray-900 p-2 text-white transition-colors duration-200 hover:bg-gray-700"
              onClick={() => slider.current?.next()}
              aria-label="Próxima imagem"
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {selectedImage && (
        <ImageLightbox
          src={selectedImage}
          alt="Imagem expandida do projeto"
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default MediaGallery;
