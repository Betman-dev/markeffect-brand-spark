import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

interface CTABlockProps {
  variant?: 'hero' | 'inline' | 'footer-soft';
  pageType?: 'homepage' | 'services' | 'about' | 'other';
  pageTitle?: string;
  className?: string;
}

const CTABlock = ({ variant = 'hero', pageType = 'homepage', pageTitle, className = '' }: CTABlockProps) => {
  const getContent = () => {
    switch (variant) {
      case 'hero':
        if (pageType === 'homepage') {
          return {
            headline: "Individuelle Werbeartikel mit Markenwirkung",
            subcopy: "Beratung & Angebot auf Anfrage – persönlich und passgenau.",
            primaryText: "Angebot anfordern",
            primaryLink: "/kontakt#formular"
          };
        } else if (pageType === 'about') {
          return {
            headline: "Lass uns über dein Giveaway sprechen",
            subcopy: "Persönliche Beratung statt Massenware – wir liefern, was zu deiner Marke passt.",
            primaryText: "Angebot anfordern",
            primaryLink: "/kontakt#formular"
          };
        } else if (pageType === 'services') {
          return {
            headline: pageTitle ? `Angebot für ${pageTitle} anfordern` : "Angebot anfordern",
            subcopy: "Schnell zum passenden Giveaway – wir beraten und kalkulieren individuell.",
            primaryText: pageTitle ? `Jetzt für ${pageTitle} anfragen` : "Jetzt anfragen",
            primaryLink: "/kontakt#formular"
          };
        }
        break;
      
      case 'inline':
        return {
          shortText: "Unsicher, was passt?",
          secondaryText: "Kurzberatung buchen",
          secondaryLink: "/kontakt#rueckruf"
        };
      
      case 'footer-soft':
        return {
          softText: "Nur eine kurze Frage?",
          linkText: "E-Mail schreiben",
          mailtoLink: "mailto:info@markeffect.de"
        };
    }
    
    return {
      headline: "Bereit für dein Giveaway?",
      subcopy: "Individuelle Beratung und Kalkulation – passgenau für dein Projekt.",
      primaryText: "Angebot anfordern",
      primaryLink: "/kontakt#formular"
    };
  };

  const content = getContent();
  
  const handleCTAClick = (type: 'primary' | 'secondary' | 'soft') => {
    // GA4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: variant,
        page: pageType,
        cta_type: type
      });
    }
  };

  // Hero variant - prominent CTA
  if (variant === 'hero') {
    return (
      <section className={`py-16 lg:py-20 bg-transparent ${className}`}>
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
            
            <div className="flex justify-center mb-6">
              <Link
                to={content.primaryLink || "/kontakt#formular"}
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
  }

  // Inline variant - subtle, slim CTA
  if (variant === 'inline') {
    return (
      <div className={`py-8 text-center ${className}`}>
        <div className="max-w-md mx-auto px-4">
          <p className="text-base mb-4" style={{ color: 'hsl(var(--mx-ink-600))' }}>
            {content.shortText}
          </p>
          <Link
            to={content.secondaryLink || "/kontakt#rueckruf"}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm border-2 transition-all duration-200 hover:scale-105"
            style={{
              borderColor: '#0053a0',
              color: '#0053a0',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0053a0';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0053a0';
            }}
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
      </div>
    );
  }

  // Footer-soft variant - text link
  if (variant === 'footer-soft') {
    return (
      <div className={`py-8 text-center bg-gray-50 ${className}`}>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-base mb-3" style={{ color: 'hsl(var(--mx-ink-600))' }}>
            {content.softText}
          </p>
          <a
            href={content.mailtoLink}
            className="text-base font-medium underline transition-colors duration-200"
            style={{ color: '#0053a0' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#003d75';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#0053a0';
            }}
            onClick={() => handleCTAClick('soft')}
            data-gtag="cta_click"
            data-cta-location={variant}
            data-cta-page={pageType}
            data-cta-type="soft"
          >
            {content.linkText}
          </a>
          <p 
            className="text-xs mt-3 opacity-75"
            style={{ color: 'hsl(var(--mx-ink-300))' }}
          >
            Antwort werktags zeitnah. Versand über Formspree, Details in der Datenschutzerklärung.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default CTABlock;