import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Check, Target, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface AboutProps {
  image: string;
  bio: string;
  objectives: string[];
  lookingFor: string[];
}

export default function About({ image, bio, objectives, lookingFor }: AboutProps) {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16" data-testid="text-about-heading">
          {t.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-24 h-24 md:w-32 md:h-32" data-testid="img-avatar">
                <AvatarImage src={image} alt="Profile" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-base md:text-lg leading-relaxed" data-testid="text-bio">
                  {bio}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="text-xl md:text-2xl font-semibold" data-testid="text-objectives-heading">
                  {t.objectivesHeading}
                </h3>
              </div>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`text-objective-${index}`}
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl md:text-2xl font-semibold" data-testid="text-looking-heading">
                  {t.lookingHeading}
                </h3>
              </div>
              <ul className="space-y-3">
                {lookingFor.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`text-looking-${index}`}
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
