import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceItem {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16" data-testid="text-experience-heading">
          Experience & Education
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className="p-6 md:p-8 hover-elevate transition-all"
              data-testid={`card-experience-${exp.id}`}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    )}
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-exp-title-${exp.id}`}>
                      {exp.title}
                    </h3>
                    <p className="text-base md:text-lg font-medium text-muted-foreground" data-testid={`text-exp-org-${exp.id}`}>
                      {exp.organization}
                    </p>
                    <p className="text-sm uppercase tracking-wide text-muted-foreground mt-1" data-testid={`text-exp-period-${exp.id}`}>
                      {exp.period}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm md:text-base flex items-start gap-2"
                        data-testid={`text-exp-desc-${exp.id}-${idx}`}
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
