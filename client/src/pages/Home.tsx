import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import International from "@/components/International";
import Activities from "@/components/Activities";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioConfig } from "@/my-portfolio-info";

export default function Home() {
  const { language } = useLanguage();
  const config = portfolioConfig;

  const projects = config.projects.map((project) => ({
    id: project.id,
    title: project.title[language],
    description: project.description[language],
    image: project.image,
    technologies: project.technologies,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
  }));

  const experiences = config.experiences.map((exp) => ({
    id: exp.id,
    type: exp.type as "work" | "education",
    title: exp.title[language],
    organization: exp.organization[language],
    period: exp.period[language],
    description: exp.description[language],
  }));

  const internationalItems = (config.international?.items || []).map((it) => ({
    id: it.id,
    country: it.country[language],
    period: it.period[language],
    purpose: it.purpose[language],
    description: it.description[language],
    outcomes: it.outcomes[language] || [],
  }));

  const activitiesItems = (config.activities?.items || []).map((it) => ({
    id: it.id,
    name: it.name[language],
    category: it.category[language],
    period: it.period[language],
    description: it.description[language],
    outcomes: it.outcomes[language] || [],
  }));

  const skillCategories = config.skills.map((skillCat) => ({
    id: skillCat.id,
    category: skillCat.category[language],
    icon: skillCat.icon as "code" | "design" | "soft" | "tools",
    skills: skillCat.skills,
  }));

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero
          name={config.personalInfo.name}
          title={config.hero.title[language]}
          objective={config.hero.objective[language]}
          videoUrl={config.hero.presentationVideoId ? `https://www.youtube.com/embed/${config.hero.presentationVideoId}` : undefined}
        />
        <About
          image={config.personalInfo.profileImage}
          bio={config.about.bio[language]}
          objectives={config.about.objectives[language]}
          lookingFor={config.about.lookingFor[language]}
        />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <International
          items={internationalItems}
          heading={config.international?.heading[language] ?? "International"}
          description={config.international?.description[language]}
        />
        <Activities
          items={activitiesItems}
          heading={config.activities?.heading[language] ?? "Sports & Activities"}
          description={config.activities?.description[language]}
        />
        <Skills skillCategories={skillCategories} />
        <Contact
          email={config.personalInfo.email}
          phone={config.personalInfo.phone}
          linkedin={config.socialLinks.linkedin}
          github={config.socialLinks.github}
          portfolio={config.socialLinks.portfolio}
        />
      </main>
      <Footer
        name={config.personalInfo.name}
        tagline={config.hero.title[language]}
        email={config.personalInfo.email}
        linkedin={config.socialLinks.linkedin}
        github={config.socialLinks.github}
      />
    </div>
  );
}
