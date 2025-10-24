import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import avatarImage from "@assets/generated_images/Professional_headshot_portrait_c9fd9e01.png";
import dashboardImg from "@assets/generated_images/Dashboard_project_screenshot_848077aa.png";
import mobileImg from "@assets/generated_images/Mobile_app_project_screenshot_5f170100.png";
import websiteImg from "@assets/generated_images/Website_project_screenshot_2eb9aced.png";

export default function Home() {
  const portfolioData = {
    name: "Alex Johnson",
    title: "Full-Stack Developer & Computer Science Student",
    tagline: "Full-Stack Developer & CS Student",
    objective: "Passionate about building innovative solutions that make a difference. Currently pursuing my degree while gaining hands-on experience in web development and software engineering.",
    email: "alex.johnson@email.com",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    portfolio: "https://alexjohnson.dev",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    bio: "I'm a dedicated full-stack developer and computer science student with a passion for creating elegant solutions to complex problems. I combine academic knowledge with practical experience to deliver high-quality software.",
    objectives: [
      "Master modern web technologies and frameworks",
      "Contribute to open-source projects and community",
      "Build scalable and user-friendly applications",
      "Continuously learn and adapt to new technologies",
    ],
    lookingFor: [
      "Internship opportunities in software development",
      "Collaborative projects with experienced teams",
      "Mentorship from industry professionals",
      "Challenging problems that push my skills forward",
    ],
    projects: [
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
    ],
    experiences: [
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
    ],
    skillCategories: [
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
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          objective={portfolioData.objective}
          videoUrl={portfolioData.videoUrl}
        />
        <About
          image={avatarImage}
          bio={portfolioData.bio}
          objectives={portfolioData.objectives}
          lookingFor={portfolioData.lookingFor}
        />
        <Projects projects={portfolioData.projects} />
        <Experience experiences={portfolioData.experiences} />
        <Skills skillCategories={portfolioData.skillCategories} />
        <Contact
          email={portfolioData.email}
          linkedin={portfolioData.linkedin}
          github={portfolioData.github}
          portfolio={portfolioData.portfolio}
        />
      </main>
      <Footer
        name={portfolioData.name}
        tagline={portfolioData.tagline}
        email={portfolioData.email}
        linkedin={portfolioData.linkedin}
        github={portfolioData.github}
      />
    </div>
  );
}
