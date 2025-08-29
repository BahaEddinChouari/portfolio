export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  caseStudy?: CaseStudyProps;
  about: AboutProps;
  education?: EducationProps[];
  skills?: SkillsProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface CaseStudyProps {
  name: string;
  overview: string[];
  impacts: string[];
  currentUse: string;
  tech: string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  slug?: string;
  details?: string | string[];
  tech?: string[];
  outcomes?: string[];
}

export interface EducationProps {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location?: string;
}

export interface SkillsProps {
  programmingLanguages?: string[];
  mobile?: string[];
  webFrameworks?: string[];
  databases?: string[];
  bigDataAI?: string[];
  devOps?: string[];
  spokenLanguages?: string[];
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
