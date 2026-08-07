export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  technologies: string[];
  image: string;
  mobileImage?: string;
  demoUrl: string;
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  org: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  type: "education" | "project";
}

export interface Certificate {
  id: number;
  title: string;
  image: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  tools: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}
