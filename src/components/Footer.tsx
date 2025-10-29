import { Heart, Mail, Phone, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-card/50 backdrop-blur-sm border-t border-border">
      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--nepal-red))] via-accent to-[hsl(var(--nepal-blue))]" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Prazzzcode.</h3>
            <p className="text-muted-foreground mb-4">
              Full-stack developer, IoT enthusiast, and UI/UX designer passionate about creating innovative solutions.
            </p>
            <p className="text-sm text-muted-foreground">
              Based in Sanepa, Lalitpur, Nepal 🇳🇵
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:prazolluitel52@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                prazolluitel52@gmail.com
              </a>
              <a
                href="tel:+9779807064208"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +977-9807064208
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1B1ySS6Vzu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent/10 hover:text-accent transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/prazzzz_10/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent/10 hover:text-accent transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Prazzzcode"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-accent/10 hover:text-accent transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Prazol Luitel. All rights reserved. | Made with{" "}
            <Heart className="w-4 h-4 text-[hsl(var(--nepal-red))] fill-current animate-float" />
            in Nepal 🇳🇵
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
