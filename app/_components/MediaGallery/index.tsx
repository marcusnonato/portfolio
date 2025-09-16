import { useState, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

interface MediaTypes {
  images: string[];
}

const MediaGallery = ({ images }: MediaTypes) => {
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

  useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="relative w-full py-2">
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
          {images.map((img, index) => (
            <motion.div
              initial={{ transform: "scale(0.5)", opacity: 0 }}
              whileInView={{ transform: "scale(1)", opacity: 1 }}
              transition={{ duration: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              key={index}
              className="cursor-pointer transition-transform duration-300 hover:scale-95"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`media-${index}`}
                loading="lazy"
                className="h-[180px] w-full rounded-xl border border-gray-400 object-cover p-2 shadow-[0_8px_18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
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
              <img
                src={img}
                alt={`media-${index}`}
                loading="lazy"
                className="h-[200px] w-full max-w-[250px] rounded-xl border border-gray-400 object-cover p-2 shadow-[0_8px_18px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              />
            </div>
          ))}
        </div>

        {slider && slider.current && !isDesktop && (
          <>
            <button
              className="absolute top-1/2 left-[-10px] flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-700 bg-gray-900 p-2 text-white transition-colors duration-200 hover:bg-gray-700"
              onClick={() => slider.current?.prev()}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-[-10px] flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-700 bg-gray-900 p-2 text-white transition-colors duration-200 hover:bg-gray-700"
              onClick={() => slider.current?.next()}
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {selectedImage &&
        createPortal(
          <div
            className="pointer-events-auto fixed inset-0 z-[2147483646] flex animate-[fadeIn_0.3s_ease] cursor-zoom-out items-center justify-center bg-black/95 [&[data-state=open]]:animate-[fadeIn_0.3s_ease]"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="expanded"
              className="relative z-[2147483647] max-h-[90%] max-w-[90%] rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            />
          </div>,
          document.body,
        )}
    </>
  );
};

export default MediaGallery;
