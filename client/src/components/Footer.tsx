import { Linkedin, Github, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

interface FooterProps {
  name: string;
  tagline: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export default function Footer({ name, tagline, email, linkedin, github }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t py-12 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2" data-testid="text-footer-name">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              {tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover-elevate active-elevate-2 rounded-md px-2 py-1"
                  data-testid="link-footer-about"
                >
                  {translations[language].nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover-elevate active-elevate-2 rounded-md px-2 py-1"
                  data-testid="link-footer-projects"
                >
                  {translations[language].nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover-elevate active-elevate-2 rounded-md px-2 py-1"
                  data-testid="link-footer-contact"
                >
                  {translations[language].nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">{t.connect}</h4>
            <div className="flex gap-3 mb-4">
              {linkedin && (
                <button
                  onClick={() => console.log(`Open LinkedIn: ${linkedin}`)}
                  className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                  data-testid="button-footer-linkedin"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
              )}
              {github && (
                <button
                  onClick={() => console.log(`Open GitHub: ${github}`)}
                  className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                  data-testid="button-footer-github"
                >
                  <Github className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={() => console.log(`Email: ${email}`)}
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="button-footer-email"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              {t.lastUpdated} {currentYear}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {currentYear} {name}. {t.allRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
