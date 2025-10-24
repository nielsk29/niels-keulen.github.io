import Projects from "../Projects";
import dashboardImg from "@assets/generated_images/Dashboard_project_screenshot_848077aa.png";
import mobileImg from "@assets/generated_images/Mobile_app_project_screenshot_5f170100.png";
import websiteImg from "@assets/generated_images/Website_project_screenshot_2eb9aced.png";

export default function ProjectsExample() {
  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics platform with real-time data visualization and reporting capabilities.",
      image: dashboardImg,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Modern shopping application with seamless checkout and product discovery features.",
      image: mobileImg,
      technologies: ["React Native", "Redux", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Responsive business website with modern design and optimized performance.",
      image: websiteImg,
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  return <Projects projects={projects} />;
}
