import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Startseite", path: "/" },
    { name: "Über uns", path: "/ueber-uns" },
    { name: "Leistungen", path: "/leistungen" },
    { name: "Branchenlösungen", path: "/branchenloesungen" },
    { name: "Galerie", path: "/galerie" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/bf08d9bc-5a00-4904-aab3-8395f51527d6.png" 
              alt="Markeffect Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-secondary"
                    : "text-foreground hover:text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="btn-hero-primary"
            >
              Angebot anfragen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-secondary p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-secondary bg-muted"
                    : "text-foreground hover:text-secondary hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-3 mt-4 btn-hero-primary text-center"
            >
              Angebot anfragen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;