import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { portfolioConfig } from "@/my-portfolio-info";

interface ContactProps {
  email: string;
  phone?: string; // added
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export default function Contact({ email, phone, linkedin, github, portfolio }: ContactProps) {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleDownloadCV = () => {
    const cvEntry = (portfolioConfig.cvFile as any)[language] ?? (portfolioConfig.cvFile as any).en;
    const link = document.createElement("a");
    link.href = cvEntry.path;
    link.download = cvEntry.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold" data-testid="text-contact-heading">
            {t.heading}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="space-y-6">
          <a
            href={`mailto:${email}`}
            className="text-2xl md:text-3xl font-semibold hover-elevate active-elevate-2 inline-block rounded-md px-4 py-2 transition-colors"
            data-testid="link-email"
          >
            {email}
          </a>

          {phone && (
            <div>
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="block text-lg md:text-xl text-muted-foreground hover-elevate active-elevate-2 rounded-md px-2 py-1"
                data-testid="link-phone"
              >
                {phone}
              </a>
            </div>
          )}

          <div className="flex justify-center gap-4">
            {linkedin && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(linkedin, "_blank")}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            )}
            {github && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(github, "_blank")}
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
            )}
            {portfolio && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(portfolio, "_blank")}
                data-testid="button-portfolio"
              >
                <ExternalLink className="h-5 w-5" />
              </Button>
            )}
          </div>

          <Button
            size="lg"
            variant="default"
            className="gap-2"
            onClick={handleDownloadCV}
            data-testid="button-download-full-cv"
          >
            <Download className="h-5 w-5" />
            {t.downloadFullCV}
          </Button>
        </div>
      </div>
    </section>
  );
}
