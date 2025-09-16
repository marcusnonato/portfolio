import React from "react";
import { Code2, SquareDashedMousePointer } from "lucide-react";

type CardProjectProps = {
  cover: string;
  category: string;
  title: string;
  description?: string;
  repoLink?: string;
  liveLink?: string;
  isFavorite?: boolean;
};

export const Project: React.FC<CardProjectProps> = ({
  cover,
  category,
  title,
  description,
  repoLink,
  liveLink,
}) => {
  return (
    <div className="group w-80 max-w-[90vw] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/90 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/60 hover:bg-gray-800/95 hover:shadow-2xl hover:shadow-purple-500/25 sm:w-96">
      <div className="relative overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="h-56 w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent transition-opacity duration-300 group-hover:from-gray-900/50"></div>
        <div className="absolute inset-0 bg-purple-600/0 transition-all duration-300 group-hover:bg-purple-600/10"></div>
      </div>

      <div className="p-7">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-purple-500/40 bg-purple-600/40 px-4 py-2 text-sm font-semibold text-purple-200 transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-500/50 group-hover:text-white">
            {category}
          </span>
        </div>

        <h3 className="mb-4 line-clamp-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-200">
          {title}
        </h3>

        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>
        {(repoLink || liveLink) && (
          <div className="flex gap-4">
            {liveLink ? (
              <a
                href={liveLink}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareDashedMousePointer size={16} />
                Demo
              </a>
            ) : (
              <button
                className="flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-gray-700 px-5 py-3 text-sm font-semibold text-gray-400"
                disabled
              >
                <SquareDashedMousePointer size={16} />
                No Demo
              </button>
            )}

            <a
              href={repoLink}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-600 bg-transparent px-5 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={16} />
              {repoLink === "Private" ? "Private" : "Code"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
