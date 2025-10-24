import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, ExternalLink } from "lucide-react";

interface ContactProps {
  email: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export default function Contact({ email, linkedin, github, portfolio }: ContactProps) {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold" data-testid="text-contact-heading">
            Let's Work Together
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects. 
            Feel free to reach out if you'd like to connect!
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

          <div className="flex justify-center gap-4">
            {linkedin && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log(`Open LinkedIn: ${linkedin}`)}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            )}
            {github && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log(`Open GitHub: ${github}`)}
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
            )}
            {portfolio && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log(`Open Portfolio: ${portfolio}`)}
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
            onClick={() => console.log("Download Full CV triggered")}
            data-testid="button-download-full-cv"
          >
            <Download className="h-5 w-5" />
            Download Full CV
          </Button>
        </div>
      </div>
    </section>
  );
}
