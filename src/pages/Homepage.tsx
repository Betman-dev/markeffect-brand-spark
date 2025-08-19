import { Link } from "react-router-dom";
import { ArrowRight, Target, CheckCircle, Clock, Users, Sparkles } from "lucide-react";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import FAQ from "../components/FAQ";
import CTABlock from "../components/CTABlock";
import heroProductMosaic from "../assets/hero-product-mosaic.jpg";
import powerbankMockup from "../assets/powerbank-mockup.jpg";
import notebookMockup from "../assets/notebook-mockup.jpg";
import mugMockup from "../assets/mug-mockup.jpg";
import usbMockup from "../assets/usb-mockup.jpg";

const Homepage = () => {
  const usps = [
    {
      icon: <Target className="h-6 w-6 stroke-1" style={{ color: 'hsl(var(--mx-ink-600))' }} />,
      title: "Auf Anfrage",
      description: "Keine Preislisten – individuelle Kalkulation zu deinem Projekt"
    },
    {
      icon: <CheckCircle className="h-6 w-6 stroke-1" style={{ color: 'hsl(var(--mx-ink-600))' }} />,
      title: "EU-Produktion", 
      description: "Hochwertige Veredelung, kurze Wege, faire Preise"
    },
    {
      icon: <Clock className="h-6 w-6 stroke-1" style={{ color: 'hsl(var(--mx-ink-600))' }} />,
      title: "Schnelle Entwürfe",
      description: "Mockups und erste Vorschläge innerhalb von 24 Stunden"
    },
    {
      icon: <Users className="h-6 w-6 stroke-1" style={{ color: 'hsl(var(--mx-ink-600))' }} />,
      title: "Persönliche Betreuung",
      description: "Direkter Draht zu deinem Ansprechpartner – kein Callcenter"
    },
    {
      icon: <Sparkles className="h-6 w-6 stroke-1" style={{ color: 'hsl(var(--mx-ink-600))' }} />,
      title: "Saubere Veredelung",
      description: "Präzise Umsetzung deines Designs mit professioneller Technik"
    }
  ];

  const categories = [
    {
      image: notebookMockup,
      title: "Schreibgeräte",
      description: "Kugelschreiber & Fineliner mit Logo – griffig im Alltag, sauber gedruckt.",
      note: "Auf Anfrage | Individuelle Kalkulation"
    },
    {
      image: mugMockup,
      title: "Tassen & Becher",
      description: "Keramik, Emaille, To-Go – tägliche Sichtbarkeit am Arbeitsplatz.",
      note: "Auf Anfrage | Individuelle Kalkulation"
    },
    {
      image: powerbankMockup,
      title: "Textilien",
      description: "T-Shirts, Hoodies, Caps – bestickt oder bedruckt, langlebig im Einsatz.",
      note: "Auf Anfrage | Individuelle Kalkulation"
    },
    {
      image: usbMockup,
      title: "Technik & Elektronik",
      description: "Powerbanks, USB-Sticks, Gadgets – funktional und markenstark.",
      note: "Auf Anfrage | Individuelle Kalkulation"
    },
    {
      image: heroProductMosaic,
      title: "Nachhaltig/Eco",
      description: "Recycelt & biobasiert – Wirkung ohne Greenwashing.",
      note: "Auf Anfrage | Individuelle Kalkulation"
    },
    {
      image: notebookMockup,
      title: "Messe & Events",
      description: "Lanyards, Notizbücher, Goodie-Sets – ready für deinen Auftritt.",
      note: "Auf Anfrage | Individuelle Kalkulation"
    }
  ];

  const processSteps = [
    "Du sagst uns Anlass, Stückzahl, Timing und Branding.",
    "Wir erstellen Entwürfe (24 h), prüfen Druckdaten und bemustern bei Bedarf.",
    "Sichere Veredelung, Qualitätscheck, verlässliche Planung.",
    "Termingerecht zu dir – europaweit."
  ];

  return (
    <Layout>
      <SEOHead
        title="Markeffect · Premium-Giveaways mit Markenwirkung"
        description="Werbeartikel mit klarer Markenwirkung: Beratung, Design, Veredelung, EU-Produktion. Jetzt unverbindlich anfragen."
        keywords="Werbeartikel, Giveaways, Veredelung, Siebdruck, Stick, Gravur, EU-Produktion, Markenwirkung"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 min-h-screen flex items-center">
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Yellow geometric shapes */}
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-400 transform rotate-12 rounded-3xl"></div>
          <div className="absolute top-1/2 right-1/5 w-32 h-32 bg-yellow-300 transform -rotate-12 rounded-2xl"></div>
          
          {/* Green accents */}
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-green-400 transform rotate-45 rounded-xl"></div>
          <div className="absolute top-1/4 right-1/6 w-16 h-16 bg-green-300 transform -rotate-6 rounded-lg"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/5 right-1/2 w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-yellow-500">
              <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Curved arrow */}
          <div className="absolute bottom-1/4 left-1/2 w-16 h-16">
            <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
              <path d="M20,50 Q50,20 80,50" stroke="currentColor" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-[62ch]">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-lg font-medium text-gray-800">HELLO!</span>
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-yellow-500">
                    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                <span className="flex items-center gap-3">
                  Giveaways 
                  <span className="inline-block w-8 h-8 bg-green-400 rounded-full"></span>
                  mit
                </span>
                <span className="block">Markenwirkung</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Werbeartikel-Agentur für individuelle Lösungen zur Stärkung 
                deiner digitalen Präsenz und Markenwahrnehmung.
              </p>
              
              {/* Small CTA Button */}
              <button 
                className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-colors duration-200 text-sm"
                onClick={() => window.location.href = '/kontakt#formular'}
                data-cta-location="hero" 
                data-cta-page="homepage"
              >
                Über uns
              </button>
            </div>
            
            <div className="relative lg:flex justify-center">
              <div className="relative z-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-white shadow-2xl flex items-center justify-center">
                  <img
                    src={heroProductMosaic}
                    alt="Premium Werbeartikel Sortiment – Tassen, Powerbanks und Textilien mit professioneller Veredelung"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {usps.map((usp, index) => (
              <div
                key={index}
                className={`text-center fade-in-delay-${index + 1}`}
              >
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--mx-ink-600))' }}>
                  {usp.title}
                </h3>
                <p className="text-sm" style={{ color: 'hsl(var(--mx-ink-300))' }}>
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Top-Kategorien
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`card-hover fade-in-delay-${index % 3 + 1}`}
              >
                <div className="image-hover mb-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {category.description}
                </p>
                <p className="text-xs text-secondary font-medium">
                  {category.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA after Categories */}
      <CTABlock 
        variant="inline" 
        pageType="homepage"
      />

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Unser Prozess
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className={`text-center fade-in-delay-${index + 1}`}>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="text-sm text-muted-foreground">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA before Footer */}
      <CTABlock 
        variant="footer-soft" 
        pageType="homepage"
      />
    </Layout>
  );
};

export default Homepage;