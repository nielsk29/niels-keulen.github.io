import { Card } from "@/components/ui/card";
import { Code2, Palette, Users, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level?: string;
}

interface SkillCategory {
  id: number;
  category: string;
  icon: "code" | "design" | "soft" | "tools";
  skills: Skill[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const iconMap = {
  code: Code2,
  design: Palette,
  soft: Users,
  tools: Wrench,
};

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16" data-testid="text-skills-heading">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Card
                key={category.id}
                className="p-6 space-y-4"
                data-testid={`card-skill-category-${category.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold" data-testid={`text-category-${category.id}`}>
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="text-sm flex items-center justify-between"
                      data-testid={`text-skill-${category.id}-${index}`}
                    >
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
