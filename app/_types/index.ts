export interface MainProjectProps {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  note?: string;
  startDate: string;
  finishDate?: string | null;
  repoLink: string;
  demoLink?: string | null;
  images: string[];
  createdAt: string;
  updatedAt: string;
  isInDevelopment?: boolean;
}

export interface CardProjectProps {
  cover: string;
  category: string;
  title: string;
  description?: string;
  repoLink?: string;
  liveLink?: string;
  isFavorite?: boolean;
}

export interface MediaGalleryProps {
  images: string[];
}

export interface TechLogo {
  src: string;
  name: string;
}
