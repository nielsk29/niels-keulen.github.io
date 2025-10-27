/**
 * MY PORTFOLIO INFORMATION
 * 
 * This file contains all your personal information for the portfolio.
 * Update the values below with your real information.
 * 
 * Instructions:
 * 1. Replace placeholder text with your actual information
 * 2. Update image paths to point to your actual images
 * 3. Add/remove projects, experiences, and skills as needed
 * 4. Save the file and the website will automatically update
 */

export const portfolioConfig = {
  // ========================================
  // BASIC INFORMATION
  // ========================================
  personalInfo: {
    name: "Alex Johnson", // Replace with your full name
    email: "alex.johnson@email.com", // Replace with your email
    phone: "+1 (555) 123-4567", // Optional: Add your phone number
    location: "City, Country", // Optional: Your location
    
    // Profile picture - Place your image in client/src/assets/ folder
    // Then update the path below (e.g., "./assets/my-photo.jpg")
    profileImage: "attached_assets/generated_images/Professional_headshot_portrait_c9fd9e01.png",
  },

  // ========================================
  // SOCIAL LINKS
  // ========================================
  socialLinks: {
    linkedin: "https://linkedin.com/in/alexjohnson", // Your LinkedIn profile URL
    github: "https://github.com/alexjohnson", // Your GitHub profile URL
    portfolio: "https://alexjohnson.dev", // Optional: Your personal website
    twitter: "", // Optional: Your Twitter/X handle
  },

  // ========================================
  // HERO SECTION
  // ========================================
  hero: {
    title: {
      en: "Computer Science Student & Aspiring Software Engineer",
      fr: "Étudiant en Informatique & Futur Ingénieur Logiciel",
    },
    objective: {
      en: "Computer Science student passionate about algorithms, system design, and building efficient software solutions. Actively seeking internship opportunities to apply theoretical knowledge to real-world challenges.",
      fr: "Étudiant en informatique passionné par les algorithmes, la conception de systèmes et la création de solutions logicielles efficaces. À la recherche active de stages pour appliquer mes connaissances théoriques à des défis réels.",
    },
    // Optional: Add a YouTube video ID (the part after "watch?v=" or "embed/")
    // Example: "dQw4w9WgXcQ" from https://www.youtube.com/watch?v=dQw4w9WgXcQ
    presentationVideoId: "dQw4w9WgXcQ",
  },

  // ========================================
  // ABOUT SECTION
  // ========================================
  about: {
    bio: {
      en: "I'm a Computer Science student with a strong foundation in algorithms, data structures, and software engineering principles. I enjoy tackling complex problems and learning new technologies through hands-on projects and coursework.",
      fr: "Je suis étudiant en informatique avec une solide base en algorithmes, structures de données et principes de génie logiciel. J'aime relever des défis complexes et apprendre de nouvelles technologies à travers des projets pratiques et des cours.",
    },
    objectives: {
      en: [
        "Deepen understanding of algorithms and data structures",
        "Gain practical experience through internships and projects",
        "Contribute to open-source communities",
        "Build a strong foundation in system design and architecture",
      ],
      fr: [
        "Approfondir ma compréhension des algorithmes et structures de données",
        "Acquérir une expérience pratique via des stages et projets",
        "Contribuer aux communautés open-source",
        "Construire une base solide en conception de systèmes et architecture",
      ],
    },
    lookingFor: {
      en: [
        "Software engineering internships for Summer 2025",
        "Research opportunities in algorithms or AI/ML",
        "Collaborative team projects and hackathons",
        "Mentorship from experienced developers",
      ],
      fr: [
        "Stages en génie logiciel pour l'été 2025",
        "Opportunités de recherche en algorithmes ou IA/ML",
        "Projets d'équipe collaboratifs et hackathons",
        "Mentorat de développeurs expérimentés",
      ],
    },
  },

  // ========================================
  // PROJECTS
  // Add, remove, or modify projects as needed
  // ========================================
  projects: [
    {
      id: 1,
      title: {
        en: "Algorithm Visualizer",
        fr: "Visualiseur d'Algorithmes",
      },
      description: {
        en: "Interactive web application for visualizing sorting and pathfinding algorithms with step-by-step execution and performance metrics.",
        fr: "Application web interactive pour visualiser les algorithmes de tri et de recherche de chemin avec exécution pas à pas et métriques de performance.",
      },
      // Place project images in client/src/assets/ or attached_assets/
      image: "attached_assets/generated_images/Dashboard_project_screenshot_848077aa.png",
      technologies: ["React", "TypeScript", "D3.js", "Algorithms"],
      liveUrl: "https://example.com", // Optional: Live demo URL
      githubUrl: "https://github.com/example", // Optional: GitHub repository URL
    },
    {
      id: 2,
      title: {
        en: "Task Management System",
        fr: "Système de Gestion de Tâches",
      },
      description: {
        en: "Full-stack application with user authentication, real-time updates, and RESTful API built with modern web technologies.",
        fr: "Application full-stack avec authentification utilisateur, mises à jour en temps réel et API RESTful construite avec des technologies web modernes.",
      },
      image: "attached_assets/generated_images/Mobile_app_project_screenshot_5f170100.png",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 3,
      title: {
        en: "Personal Blog Platform",
        fr: "Plateforme de Blog Personnel",
      },
      description: {
        en: "Static site generator with markdown support, syntax highlighting for code snippets, and optimized build process.",
        fr: "Générateur de site statique avec support Markdown, coloration syntaxique pour les extraits de code et processus de build optimisé.",
      },
      image: "attached_assets/generated_images/Website_project_screenshot_2eb9aced.png",
      technologies: ["Python", "Markdown", "Jinja2", "GitHub Pages"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    // Add more projects by copying the structure above
  ],

  // ========================================
  // EXPERIENCE & EDUCATION
  // Add, remove, or modify experiences as needed
  // ========================================
  experiences: [
    {
      id: 1,
      type: "education", // "education" or "work"
      title: {
        en: "Bachelor of Science in Computer Science",
        fr: "Licence en Informatique",
      },
      organization: {
        en: "State University",
        fr: "Université d'État",
      },
      period: {
        en: "2022 - 2026",
        fr: "2022 - 2026",
      },
      description: {
        en: [
          "GPA: 3.8/4.0 - Coursework in Data Structures, Algorithms, Database Systems, and Software Engineering",
          "Member of ACM student chapter and regular participant in competitive programming contests",
          "Teaching Assistant for CS101: Introduction to Programming",
        ],
        fr: [
          "Moyenne: 3.8/4.0 - Cours en Structures de Données, Algorithmes, Systèmes de Bases de Données et Génie Logiciel",
          "Membre de l'ACM et participant régulier aux concours de programmation compétitive",
          "Assistant d'enseignement pour CS101: Introduction à la Programmation",
        ],
      },
    },
    {
      id: 2,
      type: "work",
      title: {
        en: "Software Development Intern",
        fr: "Stagiaire en Développement Logiciel",
      },
      organization: {
        en: "Tech Startup",
        fr: "Startup Tech",
      },
      period: {
        en: "Summer 2024",
        fr: "Été 2024",
      },
      description: {
        en: [
          "Developed and tested features for a web application using React, Node.js, and PostgreSQL",
          "Participated in agile sprints, code reviews, and pair programming sessions",
          "Improved application performance by optimizing database queries and implementing caching",
        ],
        fr: [
          "Développé et testé des fonctionnalités pour une application web utilisant React, Node.js et PostgreSQL",
          "Participé aux sprints agiles, revues de code et sessions de programmation en binôme",
          "Amélioré les performances de l'application en optimisant les requêtes de base de données et en implémentant du caching",
        ],
      },
    },
    {
      id: 3,
      type: "work",
      title: {
        en: "Personal Projects & Learning",
        fr: "Projets Personnels & Apprentissage",
      },
      organization: {
        en: "Self-Directed",
        fr: "Auto-dirigé",
      },
      period: {
        en: "2022 - Present",
        fr: "2022 - Présent",
      },
      description: {
        en: [
          "Built multiple full-stack applications to practice new frameworks and technologies",
          "Completed online courses in advanced algorithms, system design, and cloud computing",
          "Active on GitHub with contributions to open-source projects",
        ],
        fr: [
          "Construit plusieurs applications full-stack pour pratiquer de nouveaux frameworks et technologies",
          "Complété des cours en ligne sur les algorithmes avancés, conception de systèmes et cloud computing",
          "Actif sur GitHub avec des contributions aux projets open-source",
        ],
      },
    },
    // Add more experiences by copying the structure above
  ],

  // ========================================
  // SKILLS
  // Add, remove, or modify skill categories and skills as needed
  // ========================================
  skills: [
    {
      id: 1,
      category: {
        en: "Programming",
        fr: "Programmation",
      },
      icon: "code", // Options: "code", "tools", "design", "soft"
      skills: [
        { name: "Python", level: "Advanced" }, // Level is optional
        { name: "Java", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
        { name: "JavaScript/TypeScript" },
      ],
    },
    {
      id: 2,
      category: {
        en: "Web Development",
        fr: "Développement Web",
      },
      icon: "tools",
      skills: [
        { name: "React" },
        { name: "Node.js" },
        { name: "SQL & NoSQL" },
        { name: "REST APIs" },
      ],
    },
    {
      id: 3,
      category: {
        en: "Tools & Other",
        fr: "Outils & Autre",
      },
      icon: "design",
      skills: [
        { name: "Git & GitHub" },
        { name: "Linux/Bash" },
        { name: "Docker" },
        { name: "VS Code" },
      ],
    },
    {
      id: 4,
      category: {
        en: "Soft Skills",
        fr: "Compétences Relationnelles",
      },
      icon: "soft",
      skills: [
        { name: "Problem Solving" },
        { name: "Team Collaboration" },
        { name: "Quick Learner" },
        { name: "Communication" },
      ],
    },
    // Add more skill categories by copying the structure above
  ],

  // ========================================
  // CV/RESUME FILE
  // ========================================
  // Place your CV PDF file in the public/ or attached_assets/ folder
  // Then update the path below
  cvFile: {
    path: "/cv.pdf", // Path to your CV file
    filename: "Alex_Johnson_CV.pdf", // Desired download filename
  },
};
