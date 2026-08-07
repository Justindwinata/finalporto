export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  technologies: string;
  demoUrl: string;
  description: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface Certificate {
  title: string;
  image: string;
}

export interface SkillGroup {
  title: string;
  summary: string;
  tools: string[];
}
