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
    name: "Niels Keulen", // Replace with your full name
    email: "nielskeulen29@gmail.com", // Replace with your email
    phone: "+33 6 52 44 62 25", // Optional: Add your phone number
    location: "Toulouse, France", // Optional: Your location

    // Profile picture - Place your image in client/src/assets/ folder
    // Then update the path below (e.g., "./assets/my-photo.jpg")
    // use absolute path from site root (docs/assets/... after deploy)
    profileImage:
      "/assets/generated_images/Professional_headshot_portrait_c9fd9e01.png",
  },

  // ========================================
  // SOCIAL LINKS
  // ========================================
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/niels-keulen", // Your LinkedIn profile URL
    github: "https://github.com/alexjohnson", // Your GitHub profile URL
    portfolio: "", // Optional: Your personal website
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
      fr: "Étudiant en informatique passionné par les algorithmes, la conception de systèmes et la création de solutions logicielles efficaces. À la recherche de stages pour appliquer mes connaissances à des projets concrets.",
    },
    // Optional: Add a YouTube video ID (the part after "watch?v=" or "embed/")
    // Example: "dQw4w9WgXcQ" from https://www.youtube.com/watch?v=dQw4w9WgXcQ
    presentationVideoId: "56STvMBKYdw",
  },

  // ========================================
  // ABOUT SECTION
  // ========================================
  about: {
    bio: {
      en: "I'm a Computer Science student with a strong foundation in algorithms, data structures, and software engineering principles. I enjoy tackling complex problems and learning new technologies through hands-on projects and coursework.",
      fr: "Je suis étudiant en informatique avec une solide base en algorithmes, structures de données et principes du génie logiciel. J'aime relever des défis complexes et apprendre de nouvelles technologies à travers des projets pratiques et des cours.",
    },
    objectives: {
      en: [
        "Deepen understanding of algorithms and data structures",
        "Gain practical experience through internships and projects",
        "Build a strong foundation in system design and architecture",
        "Work on projects that align with my values",
      ],
      fr: [
        "Approfondir ma compréhension des algorithmes et des structures de données",
        "Acquérir une expérience pratique via des stages et projets",
        "Construire une base solide en conception de systèmes et d'architecture",
        "Participer à des projets en accord avec mes valeurs",
      ],
    },
    lookingFor: {
      en: [
        "Software engineering internships for Summer 2026",
        "Mentorship from experienced developers",
        "Part-time work in non-computer science fields to broaden my perspective",
      ],
      fr: [
        "Stages en génie logiciel pour l'été 2026",
        "Mentorat de développeurs expérimentés",
        "Travail étudiant dans des domaines autres que l'informatique pour l'ouverture d'esprit",
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
        en: "Software of 3D rendering using RayTracing",
        fr: "Logiciel de Rendu 3D utilisant le RayTracing",
      },
      description: {
        en: "As part of my TIPE (Travaux d'Initiative Personnelle Encadrés) for the engineering school entrance exam, I created software that produces photorealistic images of a 3D scene. It was written in C without using external rendering libraries.",
        fr: "Dans le cadre de mon TIPE pour le concours d'entrée en école d'ingénieur, j'ai créé un logiciel produisant des images photoréalistes représentant une scène 3D. Le tout a été réalisé en C sans utiliser de bibliothèques de rendu externes.",
      },
      // use absolute paths served from site root -> docs/assets/...
      image: "/assets/tipe/photo_tipe.png",
      technologies: ["C", "RayTracing", "Mathematics", "Algorithms"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 2,
      title: {
        en: "3D Video Game with RayCasting",
        fr: "Jeux-vidéo 3D utilisant le RayCasting",
      },
      description: {
        en: "As part of a high school project at 16, I created a 3D video game using raycasting (an early technique for 3D rendering in games).",
        fr: "Dans le cadre d'un projet de lycée, à 16 ans, j'ai développé un jeu vidéo 3D utilisant le raycasting (technique historique de rendu 3D).",
      },
      image: "/assets/niya/Capture_niya_3D.png",
      technologies: ["Python", "RayCasting", "Mathematics", "Algorithms"],
      liveUrl: "",
      githubUrl: "",
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
        fr: "Ecole d'ingénieur",
      },
      organization: {
        en: "State University",
        fr: "ENSEEIHT Toulouse INP",
      },
      period: {
        en: "2025 - 2028",
        fr: "2025 - 2028",
      },
      description: {
        en: [
          "GPA: 3.8/4.0 - Coursework in Data Structures, Algorithms, Database Systems, and Software Engineering",
          "Member of the ACM student chapter and regular participant in competitive programming contests",
          "Teaching Assistant for CS101: Introduction to Programming",
        ],
        fr: ["Études en spécialité Sciences du numérique"],
      },
    },
    {
      id: 2,
      type: "education",
      title: {
        en: "Preparatory Class for Grandes Écoles (CPGE)",
        fr: "Classe préparatoire au grande école",
      },
      organization: {
        en: "Lycée Champollion - Grenoble",
        fr: "Lycée Champollion - Grenoble",
      },
      period: {
        en: "2023 - 2025",
        fr: "2023 - 2025",
      },
      description: {
        en: [
          "Intensive science courses with a focus on mathematics, physics and computer science.",
          "Creation of my 3D project with RayTracing as part of my TIPE project",
        ],
        fr: [
          "Classe préparatoire en Mathématique, Physique et informatique.",
          "Création de mon projet de 3D avec RayTracing dans le cadre de mon TIPE",
        ],
      },
    },
    {
      id: 3,
      type: "work",
      title: {
        en: "Seasonal agricultural job",
        fr: "Travail saisonnier agricole",
      },
      organization: {
        en: "EARL PIHEE – Gennes-Val-De-Loire",
        fr: "EARL PIHEE – Gennes-Val-De-Loire",
      },
      period: {
        en: "Summer 2022",
        fr: "Été 2022",
      },
      description: {
        en: [
          "Performed seasonal field work such as topping corn plants and general farm tasks.",
          "This job helped me gain perspective on different professions and develop work discipline.",
        ],
        fr: [
          "Travail saisonnier dans les champs pour l'écimage du maïs et autres tâches agricoles.",
          "Ce travail m'a permis d'ouvrir l'esprit sur différents métiers et de développer de la rigueur.",
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
        { name: "C", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "C++", level: "Intermediate" },
      ],
    },
    {
      id: 2,
      category: {
        en: "Tools & Other",
        fr: "Outils & Autre",
      },
      icon: "design",
      skills: [
        { name: "Git & GitHub" },
        { name: "Linux/Bash" },
        { name: "VS Code" },
      ],
    },
    {
      id: 3,
      category: {
        en: "Soft Skills",
        fr: "Compétences Relationnelles",
      },
      icon: "soft",
      skills: [
        { name: "Problem Solving" },
        { name: "Team Collaboration" },
        { name: "Fast Learner" },
        { name: "Communication" },
      ],
    },
    {
      id: 4,
      category: {
        en: "Langage",
        fr: "Langue",
      },
      icon: "soft",
      skills: [
        { name: "Français", level: "Fluent" },
        { name: "English", level: "Advanced" },
        { name: "Spanish", level: "Intermediate" },
        { name: "Dutch", level: "Beginner" },
      ],
    },
    // Add more skill categories by copying the structure above
  ],

  // ========================================
  // CV/RESUME FILE
  // Place your CV PDF files in assets/CV/ (example names below)
  cvFile: {
    en: {
      path: "/assets/CV/CV_2025_Niels_Keulen_EN.pdf",
      filename: "CV_2025_Niels_Keulen_EN.pdf",
    },
    fr: {
      path: "/assets/CV/CV_2025_Niels_Keulen_FR.pdf",
      filename: "CV_2025_Niels_Keulen_FR.pdf",
    },
  },
};
