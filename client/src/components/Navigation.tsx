import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download, Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { portfolioConfig } from "@/my-portfolio-info";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const t = translations[language].nav;

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDarkMode = stored === "dark";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const handleDownloadCV = () => {
    const cvEntry = (portfolioConfig.cvFile as any)[language] ?? (portfolioConfig.cvFile as any).en;
    const link = document.createElement("a");
    link.href = cvEntry.path;
    link.download = cvEntry.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: t.about },
    { id: "projects", label: t.projects },
    { id: "experie", label: t.experience },
    { id: "international", label: t.international },
    { id: "contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-background/80 border-b" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg font-bold tracking-tight hover-elevate active-elevate-2 rounded-md px-2 py-1"
          data-testid="link-home"
        >
          Niels Keulen
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2"
              data-testid={`link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleLanguage}
            data-testid="button-language-toggle"
            title={language === "en" ? "Switch to French" : "Passer à l'anglais"}
          >
            <div className="flex items-center gap-1">
              <Languages className="h-5 w-5" />
              <span className="text-xs font-semibold">{language.toUpperCase()}</span>
            </div>
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="default"
            size="sm"
            className="hidden md:flex items-center gap-2"
            data-testid="button-download-cv"
            onClick={handleDownloadCV}
          >
            <Download className="h-4 w-4" />
            {t.downloadCV}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-sm font-medium hover-elevate active-elevate-2 rounded-md px-3 py-2"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="w-full flex items-center justify-center gap-2"
              data-testid="button-mobile-download-cv"
              onClick={() => {
                handleDownloadCV();
                setIsMobileMenuOpen(false);
              }}
            >
              <Download className="h-4 w-4" />
              {t.downloadCV}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
