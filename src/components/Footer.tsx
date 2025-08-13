import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Unternehmen */}
          <div>
            <img 
              src="/lovable-uploads/bf08d9bc-5a00-4904-aab3-8395f51527d6.png" 
              alt="Markeffect Logo" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Anderter Str. 36c · 30629 Hannover
            </p>
            <p className="text-sm text-primary-foreground/80">
              Hochwertige, individuell gebrandete Giveaways für Unternehmen aller Branchen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/branchenloesungen" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Branchenlösungen
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">info@markeffect.de</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">
                  Musterstraße 123<br />
                  12345 Musterstadt
                </span>
              </div>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2024 Markeffect. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;