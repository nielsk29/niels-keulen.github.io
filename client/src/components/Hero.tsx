import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface HeroProps {
  name: string;
  title: string;
  objective: string;
  videoUrl?: string;
}

export default function Hero({ name, title, objective, videoUrl }: HeroProps) {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 pt-16"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight" data-testid="text-hero-name">
                {name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium" data-testid="text-hero-title">
                {title}
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl" data-testid="text-hero-objective">
                {objective}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="default"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
                className="gap-2"
              >
                {t.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact"
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                {t.contactMe}
              </Button>
            </div>
          </div>

          {videoUrl && (
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-card border">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Presentation Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  data-testid="video-presentation"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
