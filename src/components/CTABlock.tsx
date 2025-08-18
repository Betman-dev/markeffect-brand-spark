import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

interface CTABlockProps {
  variant?: 'hero' | 'mid' | 'footer';
  pageType?: 'homepage' | 'services' | 'about' | 'other';
  pageTitle?: string;
  className?: string;
}

const CTABlock = ({ variant = 'mid', pageType = 'homepage', pageTitle, className = '' }: CTABlockProps) => {
  const getContent = () => {
    switch (pageType) {
      case 'homepage':
        return {
          headline: "Jetzt Anfrage starten",
          subcopy: "Individuelle Werbeartikel mit Markenwirkung – auf Anfrage, persönlich & passgenau.",
          primaryText: "Angebot anfordern",
          secondaryText: "Rückruf anfragen"
        };
      
      case 'services':
        return {
          headline: pageTitle ? `Angebot für ${pageTitle} anfordern` : "Angebot anfordern",
          subcopy: "Schnell zum passenden Giveaway – wir beraten und kalkulieren individuell.",
          primaryText: pageTitle ? `Jetzt für ${pageTitle} anfragen` : "Jetzt anfragen",
          secondaryText: "Rückruf anfragen"
        };
      
      case 'about':
        return {
          headline: "Lass uns über dein Giveaway sprechen",
          subcopy: "Persönliche Beratung statt Massenware – wir liefern, was zu deiner Marke passt.",
          primaryText: "Angebot anfordern",
          secondaryText: "Rückruf anfragen"
        };
      
      default:
        return {
          headline: "Bereit für dein Giveaway?",
          subcopy: "Individuelle Beratung und Kalkulation – passgenau für dein Projekt.",
          primaryText: "Angebot anfordern",
          secondaryText: "Rückruf anfragen"
        };
    }
  };

  const content = getContent();
  
  const handleCTAClick = (type: 'primary' | 'secondary') => {
    // GA4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: variant,
        page: pageType,
        cta_type: type
      });
    }
  };

  const getBackgroundClass = () => {
    switch (variant) {
      case 'hero':
        return 'bg-transparent'; // Hero has its own background
      case 'footer':
        return 'cta-section'; // Light background
      default:
        return 'cta-section'; // Light background
    }
  };

  return (
    <section className={`py-16 lg:py-20 ${getBackgroundClass()} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-card text-center fade-in">
          <h2 
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ 
              color: 'hsl(var(--mx-ink-700))',
              fontSize: 'clamp(26px, 3vw, 32px)',
              lineHeight: '1.2'
            }}
          >
            {content.headline}
          </h2>
          
          <p 
            className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--mx-ink-600))' }}
          >
            {content.subcopy}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              to="/kontakt#formular"
              className="cta-primary inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base"
              onClick={() => handleCTAClick('primary')}
              data-gtag="cta_click"
              data-cta-location={variant}
              data-cta-page={pageType}
              data-cta-type="primary"
            >
              {content.primaryText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/kontakt#rueckruf"
              className="cta-secondary inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base"
              onClick={() => handleCTAClick('secondary')}
              data-gtag="cta_click"
              data-cta-location={variant}
              data-cta-page={pageType}
              data-cta-type="secondary"
            >
              <Phone className="mr-2 h-4 w-4" />
              {content.secondaryText}
            </Link>
          </div>
          
          <p 
            className="text-sm opacity-75"
            style={{ color: 'hsl(var(--mx-ink-300))' }}
          >
            DSGVO-konform • Antwort werktags zeitnah
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;