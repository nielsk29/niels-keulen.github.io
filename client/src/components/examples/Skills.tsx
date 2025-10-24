import Skills from "../Skills";

export default function SkillsExample() {
  const skillCategories = [
    {
      id: 1,
      category: "Frontend",
      icon: "code" as const,
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Next.js" },
      ],
    },
    {
      id: 2,
      category: "Backend",
      icon: "tools" as const,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express" },
        { name: "PostgreSQL" },
        { name: "REST APIs" },
      ],
    },
    {
      id: 3,
      category: "Design",
      icon: "design" as const,
      skills: [
        { name: "Figma" },
        { name: "UI/UX Design" },
        { name: "Responsive Design" },
        { name: "Accessibility" },
      ],
    },
    {
      id: 4,
      category: "Soft Skills",
      icon: "soft" as const,
      skills: [
        { name: "Team Collaboration" },
        { name: "Problem Solving" },
        { name: "Communication" },
        { name: "Time Management" },
      ],
    },
  ];

  return <Skills skillCategories={skillCategories} />;
}
