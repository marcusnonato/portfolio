export interface CaseStudySection {
  id: string;
  orientation: "portrait" | "landscape" | "wide";
  stack: string[];
  screens: string[];
}

export interface CaseStudy {
  sections: CaseStudySection[];
}

export interface MainProjectProps {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  note?: string;
  startDate: string;
  finishDate?: string | null;
  repoLink?: string | null;
  demoLink?: string | null;
  images: string[];
  createdAt: string;
  updatedAt: string;
  isInDevelopment?: boolean;
  caseStudy?: CaseStudy;
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
