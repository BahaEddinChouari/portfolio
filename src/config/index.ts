import type { SiteConfig, SiteContent, AcademicProjectProps, SkillsProps } from "../types";
import { I18N } from "./i18n";
import type { LocaleKey } from "./i18n";

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
    hero: { ...translations.hero },
    experience: translations.experience.map(e => ({
      ...e,
      summary: Array.isArray(e.summary) ? [...e.summary] : e.summary
    })) as import("../types").ExperienceProps[],
    projects: translations.projects.map((project, index) => {
      const images = ["/cn.png", "/cn.png", "/fg.png"];
      return {
        ...project,
        linkPreview: `/projects/${project.slug}`,
        linkSource: "https://github.com/bannoursywar",
        image: images[index] || images[0],
        details: project.details ? [...project.details] : [],
        tech: project.tech ? [...project.tech] : [],
        outcomes: project.outcomes ? [...project.outcomes] : [],
      };
    }),
    caseStudy: {
      ...translations.caseStudy,
      impacts: translations.caseStudy.impacts ? [...translations.caseStudy.impacts] : [],
      overview: translations.caseStudy.overview ? [...translations.caseStudy.overview] : [],
      tech: translations.caseStudy.tech ? [...translations.caseStudy.tech] : [],
    },
    academicProjects: translations.academicProjects ? translations.academicProjects.map(p => ({
      ...p,
      tech: p.tech ? [...p.tech] : []
    })) : [],
    education: [...translations.education],
    skills: ((translations as any).skills ?? {}) as SkillsProps,
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
