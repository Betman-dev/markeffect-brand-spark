import { Link } from "react-router-dom";
import { Target, CheckCircle, Clock, Users, Sparkles } from "lucide-react";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import FAQ from "../components/FAQ";
import CTABlock from "../components/CTABlock";
import heroProductMosaic from "../assets/hero-product-mosaic.jpg";
import powerbankMockup from "../assets/powerbank-mockup.jpg";
import notebookMockup from "../assets/notebook-mockup.jpg";
import mugMockup from "../assets/mug-mockup.jpg";
import usbMockup from "../assets/usb-mockup.jpg";
import heroWelcomeKitMarkeffect from "../assets/hero-welcome-kit-markeffect.webp";

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
      
      <section className="bg-white pt-[128px] pb-[104px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-[60px] items-center">
            <div className="max-w-[560px]">
              <div className="text-[#6b7280] text-[14px] font-medium mb-6">
                Erstes Mockup in 24 h
              </div>
              
              <h1 className="text-[clamp(36px,4.5vw,56px)] leading-[1.1] font-extrabold tracking-[-0.015em] text-[#0a0a0a] mb-6">
                Giveaways, die man behält.
              </h1>
              
              <p className="text-[18px] leading-[1.55] text-[#374151] mb-8 max-w-[56ch]">
                Wir entwickeln und veredeln Markenartikel, die im Alltag wirklich genutzt werden – Design, Muster in 24 h und verlässliche EU-Produktion aus einer Hand.
              </p>
              
              <Link
                to="/kontakt#formular"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0a0a0a] text-white text-[14px] font-semibold rounded-full hover:bg-[#1a1a1a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:ring-offset-2 mb-4"
                data-cta-location="hero"
              >
                Angebot anfragen
              </Link>

              <div className="text-[#0a0a0a] text-[14px] font-medium">
                Kostenlose Erstberatung
              </div>
            </div>
            
            <div className="relative lg:flex justify-center order-first lg:order-last">
              <div className="bg-white rounded-[26px] lg:rounded-[28px] p-6 lg:p-8 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.06)]">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="/lovable-uploads/689fc2b0-138a-483b-b5d0-33b7d469196c.png"
                    alt="Welcome-Kit: Tasse, Slim-Powerbank, USB-C-Kabel, NFC- und Infokarte mit blauem Band – explodiertes Set auf weißem Hintergrund"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    sizes="(min-width: 1024px) 46vw, 100vw"
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