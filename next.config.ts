import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/MARCUS_NONATO_CURRICULO.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Marcus-Nonato-CV.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
