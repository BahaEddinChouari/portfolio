export const I18N = {
  en: {
    sections: {
      workExperience: "Work Experience",
      projects: "Featured Projects",
      education: "Education",
      skills: "Skills",
      about: "About Me",
      academicProjects: "Academic Projects",
      caseStudy: "Case Study",
    },
    ui: {
      source: "Source",
      details: "Details",
      overview: "Overview",
      tech: "Tech",
      outcomes: "Outcomes",
      close: "Close",
      langToggle: "FR",
      resume: "Resume",
      // NEW LABELS ↓↓↓
      critiques: "Critiques",
      solutions: "Solutions",
      actors: "Actors",
      functionalRequirements: "Functional Requirements",
      nonFunctionalRequirements: "Non-Functional Requirements",
    },
    siteConfig: {
      title: "Sywar Bannour — Mobile & Web Developer",
      description: "Mobile and web developer specializing in React Native, Flutter, and full‑stack web. Focused on crafting performant user experiences and reliable delivery.",
      navLinks: [
        { text: "Experience", href: "#experience" },
        { text: "Projects", href: "#projects" },
        { text: "Case Study", href: "#case-study" },
        { text: "Education", href: "#education" },
        { text: "Skills", href: "#skills" },
        { text: "About", href: "#about" },
      ],
    },
    hero: {
      name: "Sywar Bannour",
      specialty: "Mobile & Web Developer",
      summary: "Mobile and web developer with experience across React Native, Flutter, and modern web stacks. I build smooth UIs, integrate secure auth and payments, and ship reliable apps.",
      email: "bannoursywar@gmail.com"
    },
    experience: [
      {
        company: "ContinuousNet",
        position: "Frontend Developer (Intern)",
        startDate: "Jun 2023",
        endDate: "Feb 2024",
        summary: [
          "Co‑built a multi‑restaurant food delivery platform (client, courier, manager apps) using React/React Native and a REST API layer.",
          "Followed a V‑Model process: needs analysis → specification → conceptual design (UML) → implementation → verification.",
          "Delivered an order workflow with real‑time status updates, delivery assignment and issue escalation to managers.",
          "Improved UX and reliability: reduced order inaccuracies by introducing manager‑side validation and clearer states.",
          "Prepared architecture and UML (use‑case, sequence, class, component diagrams) and contributed to CI checks.",
          "Stack: React Native, React, TypeScript, Axios, REST, Git, CI, TailwindCSS; exposure to maps and future card payments.",
        ],
      },
      {
        company: "Freingo",
        position: "Mobile Developer (Intern)",
        startDate: "Jun 2022",
        endDate: "Aug 2022",
        summary: [
          "Developed cross‑platform mobile apps with React Native and Flutter focusing on authentication, secure storage, and responsive UI.",
          "Built client ordering and delivery modules, reducing manual processing and improving fulfillment accuracy.",
        ],
      },
    ],
    projects: [
      {
        name: "Multi‑Restaurant Delivery Platform (Capstone)",
        slug: "multi-restaurant-delivery-platform",
        summary: "Three‑sided delivery system (client, courier, manager) with reliable ordering and validation.",
        details: [
          "Context: fast‑growing food delivery market; need for accuracy, responsiveness, and clear escalation.",
          "Process: V‑Model — needs → specs → UML → implementation → verification.",
          "Key flows: ordering, manager validation, delivery assignment, claims and escalation.",
        ],
        tech: ["React Native", "React", "TypeScript", "Axios", "REST", "TailwindCSS", "Git", "CI"],
        outcomes: [
          "Reduced order inaccuracies via manager‑side confirmation.",
          "Quicker issue routing with direct manager contact and claims inbox.",
          "Planned evolutions: live courier tracking, card payments.",
        ],
      },
      {
        name: "Client Ordering Mobile App",
        slug: "client-ordering-mobile-app",
        summary: "React Native app for browsing menus, customizing items, and placing secure orders.",
        details: [
          "Catalog, item customization, cart, checkout, order tracking.",
          "Offline‑aware UI patterns and graceful error handling.",
        ],
        tech: ["React Native", "TypeScript", "Axios", "REST"],
        outcomes: ["Fast ordering flow and improved retention with notifications."],
      },
      {
        name: "Manager Dashboard",
        slug: "manager-dashboard",
        summary: "Manager web dashboard for menus, order validation, assignment, and centralized claims.",
        details: [
          "Menu/price management, order queues, validation and assignment.",
          "Claims inbox with status and audit trail.",
        ],
        tech: ["React", "TypeScript", "TailwindCSS"],
        outcomes: ["Higher order accuracy and faster resolution times."],
      },
    ],
    education: [
      {
        school: "Salem Ben Hmida High School",
        degree: "Bachelor's Degree in Experimental Sciences",
        startDate: "2019",
        endDate: "2020",
        location: "Tunisia",
      },
      {
        school: "ISITCOM Hammam Sousse",
        degree: "Bachelor's Degree in Computer Science — Embedded Systems and IoT",
        startDate: "2020",
        endDate: "2023",
        location: "Hammam Sousse, Tunisia",
      },
      {
        school: "ISITCOM Hammam Sousse",
        degree: "Professional Master's — Network Services and Security",
        startDate: "2023",
        endDate: "2024",
        location: "Hammam Sousse, Tunisia",
      },
    ],
    caseStudy: {
      name: "ContinuousNet Delivery Platform — Case Study",
      overview: [
        "Final-year project at ContinuousNet (2023–2024).",
        "Goal: design a scalable multi-restaurant delivery ecosystem with apps for customers, couriers and managers."
      ],
      critiques: [
        "High delivery fees in existing services.",
        "Frequent order inaccuracies (missing or wrong items).",
        "Poor customer service / slow complaint handling."
      ],
      solutions: [
        "Three dedicated applications (Customer, Courier, Manager) connected to a shared REST backend.",
        "Manager app acts as first escalation level: customer complaints reach managers directly."
      ],
      actors: ["Manager", "Client", "Delivery Person"],
      functionalRequirements: [
        "Manager: login, manage categories/menus/orders/complaints, update restaurant info.",
        "Client: register/login, browse restaurants/menus/offers, place orders, add complaints, edit profile.",
        "Delivery Person: register/login, edit profile, view assigned orders, update order status."
      ],
      nonFunctionalRequirements: [
        "Security & confidentiality",
        "Ergonomics / usability",
        "Scalability",
        "Efficiency",
        "Performance",
        "Availability"
      ],
      currentUse: "Piloted by local restaurant clusters; regional rollout planned for 2024.",
      tech: [
        "React Native",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Axios",
        "REST",
        "Git",
        "CI/CD"
      ],
      impacts: [
        "Reduced order inaccuracies via manager-side confirmation.",
        "Quicker issue routing with direct manager contact and claims inbox.",
        "Planned evolutions: live courier tracking, card payments."
      ]
    },
    academicProjects: [
      {
        name: "Smart Cradle IOT",
        description: "Mini projet utilisant des capteurs avec Arduino dans le cadre de l'architecture IOT",
        year: "2022",
        tech: ["Arduino", "IoT", "Capteurs"]
      },
      {
        name: "Site Web statique d'un cabinet médical",
        description: "Conception et développement d'un site web statique pour un cabinet médical",
        year: "2021",
        tech: ["HTML", "CSS", "JavaScript"]
      },
      {
        name: "Site Web dynamique de location de maison",
        description: "Développement d'une plateforme web pour la location de maisons",
        year: "2022",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
      }
    ],


    skills: {
      programmingLanguages: ["Java", "JavaScript", "C++", "Python", "PHP"],
      mobile: ["React Native", "Flutter"],
      webFrameworks: ["HTML", "CSS", "Spring Boot", "Laravel", "XML"],
      databases: ["SQL", "MongoDB"],
      bigDataAI: ["Spark", "Hadoop", "Machine Learning"],
      devOps: ["Git", "CI/CD", "Docker"],
      spokenLanguages: ["Français", "Anglais", "Italien"],
    },
    about: {
      description: `
      I'm a Mobile & Web Developer passionate about building useful digital products. I enjoy translating business requirements into intuitive experiences and highly maintainable code.

      Highlights from my capstone at ContinuousNet: designed and built a multi‑restaurant delivery platform; authored needs specs; produced UML (use‑case, sequence, class, component); implemented React Native/React clients; and verified end‑to‑end flows using a V‑Model approach. Planned evolutions include real‑time courier tracking and card payments for practicality and security.

      Core skills: React Native, Flutter, React, TypeScript, TailwindCSS, REST APIs, Axios, Git, CI/CD, Docker, and SQL/NoSQL.
    `,
    },
  },
  fr: {
    sections: {
      workExperience: "Expérience Professionnelle",
      projects: "Projets Principaux",
      education: "Formations",
      skills: "Compétences",
      about: "À Propos",
      caseStudy: "Étude de Cas",
      academicProjects: "Projets Académiques",
    },
    ui: {
      source: "Code",
      details: "Détails",
      overview: "Aperçu",
      tech: "Technologies",
      outcomes: "Résultats",
      close: "Fermer",
      langToggle: "EN",
      resume: "CV",
      // NOUVELLES ÉTIQUETTES ↓↓↓
      critiques: "Critiques",
      solutions: "Solutions proposées",
      actors: "Acteurs",
      functionalRequirements: "Exigences Fonctionnelles",
      nonFunctionalRequirements: "Exigences Non Fonctionnelles",
    },
    siteConfig: {
      title: "Sywar Bannour — Développeuse Mobile & Web",
      description: "Développeuse mobile et web spécialisé en React Native, Flutter et développement web full‑stack. Concentré sur la création d'expériences utilisateur performantes et une livraison fiable.",
      navLinks: [
        { text: "Expérience", href: "#experience" },
        { text: "Projets", href: "#projects" },
        { text: "Étude de Cas", href: "#case-study" },
        { text: "Formation", href: "#education" },
        { text: "Compétences", href: "#skills" },
        { text: "À propos", href: "#about" },
      ],
    },
    hero: {
      name: "Sywar Bannour",
      specialty: "Développeuse Mobile & Web",
      summary: "Développeuse mobile et web avec expérience en React Native, Flutter et technologies web modernes. Je crée des interfaces fluides, intègre des systèmes d'authentification et de paiement sécurisés, et livre des applications fiables.",
      email: "bannoursywar@gmail.com"
    },
    experience: [
      {
        company: "ContinuousNet",
        position: "Développeuse Frontend (Stage)",
        startDate: "Juin 2023",
        endDate: "Fév 2024",
        summary: [
          "Co‑développement d'une plateforme de livraison multi‑restaurants (applications client, livreur, gestionnaire) utilisant React/React Native et une couche API REST.",
          "Suivi d'un processus en V : analyse des besoins → spécification → conception (UML) → implémentation → vérification.",
          "Livraison d'un workflow de commande avec mises à jour en temps réel, attribution des livraisons et escalade des problèmes aux gestionnaires.",
          "Amélioration de l'UX et de la fiabilité : réduction des inexactitudes de commande grâce à la validation côté gestionnaire et des états plus clairs.",
          "Préparation de l'architecture et UML (diagrammes de cas d'utilisation, séquence, classe, composant) et contribution aux vérifications CI.",
          "Stack : React Native, React, TypeScript, Axios, REST, Git, CI, TailwindCSS; exposition aux cartes et futurs paiements par carte.",
        ],
      },
      {
        company: "Freingo",
        position: "Développeuse Mobile (Stage)",
        startDate: "Juin 2022",
        endDate: "Août 2022",
        summary: [
          "Développement d'applications mobiles multiplateformes avec React Native et Flutter axées sur l'authentification, le stockage sécurisé et l'interface utilisateur responsive.",
          "Construction de modules de commande et de livraison client, réduisant le traitement manuel et améliorant la précision d'exécution.",
        ],
      },
    ],
    projects: [
      {
        name: "Plateforme de Livraison Multi‑Restaurants (Projet de fin d'études)",
        slug: "multi-restaurant-delivery-platform",
        summary: "Système de livraison à trois faces (client, livreur, gestionnaire) avec commande fiable et validation.",
        details: [
          "Contexte : marché de livraison alimentaire en croissance rapide; besoin de précision, réactivité et escalade claire.",
          "Processus : Modèle en V — besoins → spécifications → UML → implémentation → vérification.",
          "Flux clés : commande, validation par le gestionnaire, attribution de livraison, réclamations et escalade.",
        ],
        tech: ["React Native", "React", "TypeScript", "Axios", "REST", "TailwindCSS", "Git", "CI"],
        outcomes: [
          "Réduction des inexactitudes de commande via confirmation côté gestionnaire.",
          "Acheminement plus rapide des problèmes avec contact direct du gestionnaire et boîte de réception des réclamations.",
          "Évolutions prévues : suivi des livreurs en temps réel, paiements par carte.",
        ],
      },
      {
        name: "Application Mobile de Commande Client",
        slug: "client-ordering-mobile-app",
        summary: "Application React Native pour parcourir les menus, personnaliser les articles et passer des commandes sécurisées.",
        details: [
          "Catalogue, personnalisation d'articles, panier, paiement, suivi de commande.",
          "Modèles d'interface utilisateur hors ligne et gestion élégante des erreurs.",
        ],
        tech: ["React Native", "TypeScript", "Axios", "REST"],
        outcomes: ["Flux de commande rapide et meilleure rétention avec notifications."],
      },
      {
        name: "Tableau de Bord Gestionnaire",
        slug: "manager-dashboard",
        summary: "Tableau de bord web pour les menus, la validation des commandes, l'attribution et les réclamations centralisées.",
        details: [
          "Gestion des menus/prix, files d'attente de commandes, validation et attribution.",
          "Boîte de réception des réclamations avec statut et piste d'audit.",
        ],
        tech: ["React", "TypeScript", "TailwindCSS"],
        outcomes: ["Précision des commandes plus élevée et temps de résolution plus rapides."],
      },
    ],
    education: [
      {
        school: "Lycée Salem Ben Hmida",
        degree: "Baccalauréat en Sciences Expérimentales",
        startDate: "2019",
        endDate: "2020",
        location: "Tunisie",
      },
      {
        school: "ISITCOM Hammam Sousse",
        degree: "Licence en Sciences de l'Informatique — Systèmes embarqués et IoT",
        startDate: "2020",
        endDate: "2023",
        location: "Hammam Sousse, Tunisie",
      },
      {
        school: "ISITCOM Hammam Sousse",
        degree: "Master Professionnel — Services et Sécurité des Réseaux",
        startDate: "2023",
        endDate: "2024",
        location: "Hammam Sousse, Tunisie",
      },
    ],
    caseStudy: {
      name: "Plateforme de Livraison Multi-Restaurants — Étude de Cas",
      overview: [
        "Projet de fin d’études réalisé chez ContinuousNet (2023-2024).",
        "Objectif : créer un écosystème de livraison multi-restaurants avec applications Client, Livreur et Gestionnaire.",
        "Processus : Modèle en V — analyse des besoins, spécification, conception UML, implémentation, vérification."
      ],
      critiques: [
        "Frais de livraison élevés dans les services existants.",
        "Inexactitudes fréquentes de commande (articles manquants ou erronés).",
        "Service client médiocre / traitement lent des réclamations.",
      ],
      solutions: [
        "Trois applications dédiées (Client, Livreur, Gestionnaire) connectées à un backend REST partagé.",
        "L’application Gestionnaire sert de premier niveau d’escalade : les réclamations des clients parviennent directement aux gestionnaires.",
      ],
      actors: ["Gestionnaire", "Client", "Livreur"],
      functionalRequirements: [
        "Gestionnaire : connexion, gestion des catégories/menus/commandes/réclamations, mise à jour des informations du restaurant.",
        "Client : inscription/connexion, parcourir restaurants/menus/offres, passer commandes, ajouter réclamations, modifier profil.",
        "Livreur : inscription/connexion, modifier profil, voir les commandes assignées, mettre à jour le statut.",
      ],
      nonFunctionalRequirements: [
        "Sécurité & confidentialité",
        "Ergonomie / utilisabilité",
        "Scalabilité",
        "Efficacité",
        "Performance",
        "Disponibilité",
      ],
      impacts: [
        "Réduction des inexactitudes de commande de 30 % grâce à la validation côté gestionnaire.",
        "Résolution plus rapide des problèmes avec boîte de réclamations dédiée et flux d’escalade.",
        "Fiabilité du déploiement améliorée via pipelines CI et revues Git."
      ],
      currentUse: "La plateforme est pilotée par des groupes de restaurants locaux pour gérer des commandes à grand volume, avec un déploiement prévu dans d’autres régions en 2024.",
      tech: ["React Native", "React", "TypeScript", "TailwindCSS", "Axios", "REST", "Git", "CI/CD"],
    },
    academicProjects: [
      {
        name: "Smart Cradle IOT",
        description: "Mini projet utilisant des capteurs avec Arduino dans le cadre de l'architecture IOT",
        year: "2022",
        tech: ["Arduino", "IoT", "Capteurs"]
      },
      {
        name: "Site Web statique d'un cabinet médical",
        description: "Conception et développement d'un site web statique pour un cabinet médical",
        year: "2021",
        tech: ["HTML", "CSS", "JavaScript"]
      },
      {
        name: "Site Web dynamique de location de maison",
        description: "Développement d'une plateforme web pour la location de maisons",
        year: "2022",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
      }
    ],
    about: {
      description: `
      Je suis un Développeuse Mobile & Web passionné par la création de produits numériques utiles. J'aime traduire les exigences métier en expériences intuitives et en code hautement maintenable.

      Points forts de mon projet de fin d'études chez ContinuousNet : conception et construction d'une plateforme de livraison multi-restaurants; rédaction des spécifications des besoins; production d'UML (cas d'utilisation, séquence, classe, composant); implémentation de clients React Native/React; et vérification des flux de bout en bout en utilisant une approche Modèle en V. Les évolutions prévues incluent le suivi des livreurs en temps réel et les paiements par carte pour la praticité et la sécurité.

      Compétences principales : React Native, Flutter, React, TypeScript, TailwindCSS, API REST, Axios, Git, CI/CD, Docker et SQL/NoSQL.
    `,
    },
  },
} as const;

export type LocaleKey = keyof typeof I18N;


