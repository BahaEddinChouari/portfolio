import type { SiteConfig, SiteContent } from "../types";
import { I18N, LocaleKey } from "./i18n";

export const getSiteConfig = (locale: LocaleKey): SiteConfig => {
  const translations = I18N[locale];
  
  return {
    title: translations.siteConfig.title,
    author: "Sywar Bannour",
    description: translations.siteConfig.description,
    lang: locale,
    siteLogo: "/smallv2.png",
    navLinks: [
      ...translations.siteConfig.navLinks,
      { text: translations.ui.resume, href: "/SywarCv.pdf" },
    ],
    socialLinks: [
      { text: "LinkedIn", href: "https://www.linkedin.com/in/bannour-sywar" },
      { text: "Github", href: "https://github.com/bannoursywar" },
      { text: "Email", href: "mailto:bannoursywar@gmail.com" },
    ],
    socialImage: "/zen-og.png",
    canonicalURL: "https://astro-zen.vercel.app",
  };
};

export const getSiteContent = (locale: LocaleKey): SiteContent => {
  const translations = I18N[locale];
  
  return {
    hero: {
      name: translations.hero.name,
      specialty: translations.hero.specialty,
      summary: translations.hero.summary,
      email: "bannoursywar@gmail.com",
    },
    experience: translations.experience,
    projects: translations.projects.map((project, index) => {
      const images = ["/cn.png", "/cn.png", "/fg.png"];
      return {
        ...project,
        linkPreview: `/projects/${project.slug}`,
        linkSource: "https://github.com/bannoursywar",
        image: images[index] || images[0],
      };
    }),
    caseStudy: translations.caseStudy,
    academicProjects: translations.academicProjects,
    education: translations.education,
    skills: translations.skills,
    about: {
      description: translations.about.description,
      image: "/big.jpg",
    },
  };
};

// Default English config and content for backward compatibility
export const SITE_CONFIG = getSiteConfig("en");
export const SITE_CONTENT = getSiteContent("en");

// #5755ff
