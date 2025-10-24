import Experience from "../Experience";

export default function ExperienceExample() {
  const experiences = [
    {
      id: 1,
      type: "education" as const,
      title: "Bachelor of Science in Computer Science",
      organization: "State University",
      period: "2021 - Present",
      description: [
        "Maintaining a 3.8 GPA while taking advanced courses in algorithms, software engineering, and databases",
        "Active member of the Computer Science Club and hackathon participant",
        "Teaching assistant for Introduction to Programming course",
      ],
    },
    {
      id: 2,
      type: "work" as const,
      title: "Junior Developer Intern",
      organization: "Tech Solutions Inc.",
      period: "Summer 2024",
      description: [
        "Developed and maintained full-stack web applications using React and Node.js",
        "Collaborated with senior developers to implement new features and fix bugs",
        "Participated in code reviews and agile development processes",
      ],
    },
    {
      id: 3,
      type: "work" as const,
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      period: "2023 - Present",
      description: [
        "Built custom websites and web applications for small businesses and startups",
        "Managed client relationships and project timelines independently",
        "Delivered responsive, accessible, and SEO-optimized solutions",
      ],
    },
  ];

  return <Experience experiences={experiences} />;
}
