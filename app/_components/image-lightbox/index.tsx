import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="pointer-events-auto fixed inset-0 z-[2147483646] flex animate-[fadeIn_0.3s_ease] cursor-zoom-out items-center justify-center bg-black/95 [&[data-state=open]]:animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <div className="relative z-[2147483647] max-h-[90vh] max-w-[90vw]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="max-h-[90vh] rounded-xl object-contain shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
        />
      </div>
    </div>,
    document.body,
  );
};

export default ImageLightbox;
