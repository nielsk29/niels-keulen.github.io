import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import avatarImage from "@assets/generated_images/Professional_headshot_portrait_c9fd9e01.png";
import dashboardImg from "@assets/generated_images/Dashboard_project_screenshot_848077aa.png";
import mobileImg from "@assets/generated_images/Mobile_app_project_screenshot_5f170100.png";
import websiteImg from "@assets/generated_images/Website_project_screenshot_2eb9aced.png";

export default function Home() {
  const { language } = useLanguage();
  const content = translations[language].content;

  const projects = [
    {
      id: 1,
      title: content.projects[0].title,
      description: content.projects[0].description,
      image: dashboardImg,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 2,
      title: content.projects[1].title,
      description: content.projects[1].description,
      image: mobileImg,
      technologies: ["React Native", "Redux", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 3,
      title: content.projects[2].title,
      description: content.projects[2].description,
      image: websiteImg,
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  const experiences = [
    {
      id: 1,
      type: "education" as const,
      title: content.experiences[0].title,
      organization: content.experiences[0].organization,
      period: content.experiences[0].period,
      description: content.experiences[0].description,
    },
    {
      id: 2,
      type: "work" as const,
      title: content.experiences[1].title,
      organization: content.experiences[1].organization,
      period: content.experiences[1].period,
      description: content.experiences[1].description,
    },
    {
      id: 3,
      type: "work" as const,
      title: content.experiences[2].title,
      organization: content.experiences[2].organization,
      period: content.experiences[2].period,
      description: content.experiences[2].description,
    },
  ];

  const skillCategories = [
    {
      id: 1,
      category: content.skillCategories[0].category,
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
      category: content.skillCategories[1].category,
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
      category: content.skillCategories[2].category,
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
      category: content.skillCategories[3].category,
      icon: "soft" as const,
      skills: [
        { name: "Team Collaboration" },
        { name: "Problem Solving" },
        { name: "Communication" },
        { name: "Time Management" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero
          name={content.name}
          title={content.title}
          objective={content.objective}
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />
        <About
          image={avatarImage}
          bio={content.bio}
          objectives={content.objectives}
          lookingFor={content.lookingFor}
        />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Skills skillCategories={skillCategories} />
        <Contact
          email="alex.johnson@email.com"
          linkedin="https://linkedin.com/in/alexjohnson"
          github="https://github.com/alexjohnson"
          portfolio="https://alexjohnson.dev"
        />
      </main>
      <Footer
        name={content.name}
        tagline={content.tagline}
        email="alex.johnson@email.com"
        linkedin="https://linkedin.com/in/alexjohnson"
        github="https://github.com/alexjohnson"
      />
    </div>
  );
}
