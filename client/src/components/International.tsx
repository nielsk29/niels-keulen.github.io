import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

interface InternationalItem {
  id: number;
  country: string;
  period: string;
  purpose: string;
  description: string;
  outcomes: string[];
}

interface InternationalProps {
  items: InternationalItem[];
  heading: string;
  description?: string;
}

export default function International({ items, heading, description }: InternationalProps) {
  return (
    <section id="international" className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-international-heading">
            {heading}
          </h2>
          {description && <p className="text-base md:text-lg text-muted-foreground max-w-2xl">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <Card key={it.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{it.country}</h3>
                    <span className="text-sm uppercase tracking-wide text-muted-foreground">{it.period}</span>
                  </div>
                  <p className="mt-2 text-sm">{it.purpose}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>

                  {it.outcomes && it.outcomes.length > 0 && (
                    <ul className="mt-3 space-y-1 text-sm">
                      {it.outcomes.map((o, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
