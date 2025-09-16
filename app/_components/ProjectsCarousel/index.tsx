import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "../project";

export const CarouselContainer2 = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      cover: "/sucesso-app.png",
      category: "Web Application",
      title: "Sucesso APP Landing Page",
      description:
        "A digital platform designed to professionalize the music industry by connecting composers and artists. It provides secure licensing, automated contracts, and transparent royalty management, while also offering analytics for streaming performance. The solution simplifies negotiations, ensures legal protection, and centralizes career management for music professionals.",
      lastUpdated: "2024",
      repoLink: "Private",
      liveLink: "https://admin.dev.sucessoapp.com/",
    },
    {
      cover: "/moto-market.png",
      category: "Web Application",
      title: "Moto Market",
      description:
        "Moto Market is a platform for motorcycle dealers, allowing them to display inventory and connect customers directly to sellers via WhatsApp quickly and practically. Built with Next.js, Tailwind CSS, TypeScript, Prisma, Shadcn/UI, and PostgreSQL.",
      lastUpdated: "2024",
      repoLink: "https://github.com/marcusnonato/Moto-market",
      liveLink: "https://moto-market-navy.vercel.app/",
    },
    {
      cover: "/fsw-foods.png",
      category: "E-commerce",
      title: "FSW Foods",
      description:
        "Restaurant e-commerce website, similar to iFood, where users can search for restaurants, add food to cart, and complete their orders. Built with Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI, and NextAuth.",
      lastUpdated: "2024",
      liveLink: "https://marcus-fsw-foods.vercel.app/",
      repoLink: "https://github.com/marcusnonato/FSW-Foods",
    },
    {
      cover: "/no-image.png",
      category: "Mobile App",
      title: "Preço Justo - Technical Test",
      description:
        "Electronics shopping app with simple but very intuitive interface, using currently highly requested technologies. Built with React Native CLI, TypeScript, Firebase, Zod, React Hook Form, and React Native Reanimated.",
      lastUpdated: "2024",
      repoLink: "https://github.com/marcusnonato/Teste-Tecnico-Pre-oJusto",
    },
    {
      cover: "/no-image.png",
      category: "Mobile App",
      title: "Marketspace",
      description:
        "Online buying and selling app, similar to OLX, allowing users to publish items for sale and buy products from others. Built with React Native, TypeScript, GluestackUI, Expo, EAS, Firebase, Zod, and React Hook Form.",
      lastUpdated: "2024",
      repoLink: "https://github.com/marcusnonato/Marketspace",
      liveLink:
        "https://expo.dev/accounts/vinicius2i/projects/marketspace/builds/a2ed1f31-9f56-4c6b-8517-fd31451d7e3e",
    },
    {
      cover: "/no-image.png",
      category: "Mobile App",
      title: "Ecommerce App",
      description:
        "General ecommerce app with sales of clothes, shoes, electronics, etc. Features beautiful and very intuitive interface. Built with React Native, TypeScript, Gluestack, Expo, Zod, React Hook Form, Firebase, EAS, and React Native Reanimated.",
      lastUpdated: "2024",
      repoLink: "https://github.com/marcusnonato/ecommerce-app",
      liveLink:
        "https://expo.dev/accounts/vinicius2i/projects/ecommerce/builds/2731ec52-d327-4779-bf76-c8c0a1fe2d8e",
    },
    {
      cover: "/dt-money.png",
      category: "Web Application",
      title: "DTMoney",
      description:
        "Financial control project for users. Users can add their daily financial income and expenses. Features a search field to filter by specific items or categories. Built with React.js, Styled-Components, TypeScript, Radix UI, and Axios.",
      lastUpdated: "2024",
      repoLink: "https://github.com/marcusnonato/DTmoney",
    },
  ];

  const itemsToShow = {
    mobile: 1,
    tablet: 1.5,
    desktop: 2.5,
  };

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return itemsToShow.mobile;
      if (window.innerWidth < 1024) return itemsToShow.tablet;
      return itemsToShow.desktop;
    }
    return itemsToShow.desktop;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(0, projects.length - itemsPerView + 1);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.clientWidth;
    const cardWidth = Math.min(384, containerWidth * 0.8); // máximo 384px (w-96) ou 80% da tela
    const gap =
      window.innerWidth < 640 ? 16 : window.innerWidth < 1024 ? 24 : 32;
    const scrollPosition = index * (cardWidth + gap);

    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(totalSlides - 1, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="animate-fade-up relative max-w-full">
      {/* Navigation Buttons */}
      <button
        className={`absolute top-1/2 left-4 z-20 flex -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-600 bg-gray-800/90 p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:bg-purple-600 hover:shadow-purple-500/30 ${
          currentIndex === 0
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className={`absolute top-1/2 right-4 z-20 flex -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-600 bg-gray-800/90 p-3 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-purple-500 hover:bg-purple-600 hover:shadow-purple-500/30 ${
          currentIndex >= totalSlides - 1
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
        onClick={handleNext}
        disabled={currentIndex >= totalSlides - 1}
      >
        <ChevronRight size={20} />
      </button>

      {/* Carousel Container with proper padding */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20">
        <div
          ref={carouselRef}
          className={`flex [scroll-snap-type:x_mandatory] gap-4 overflow-x-auto scroll-smooth py-4 sm:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden [&>*]:flex-shrink-0 [&>*]:[scroll-snap-align:start] ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              cover={project.cover}
              category={project.category}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-purple-500"
                : "w-2 bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
