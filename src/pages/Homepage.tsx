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
import heroExplodedKit from "../assets/hero-exploded-kit.webp";

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
      
      <section className="bg-white border-b border-[#eef2f7] pt-[120px] lg:pt-[140px] pb-[96px] lg:pb-[110px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[54fr_46fr] gap-14 lg:gap-16 items-center">
            <div className="max-w-[560px]">
              <div className="text-[#6b7280] text-[14px] font-medium mb-6">
                Antwort in 24–48 h
              </div>
              
              <h1 className="text-[clamp(36px,4.5vw,56px)] leading-[1.1] font-extrabold tracking-[-0.015em] text-[#0a0a0a] mb-6">
                Exklusive Werbeartikel.
                <span className="block">Präzise veredelt</span>
              </h1>
              
              <p className="text-[18px] leading-[1.55] text-[#374151] mb-8 max-w-[56ch]">
                Beratung, Mockups & EU-Produktion – ohne Preisliste und exakt kalkuliert für Ihr Projekt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-start mb-4">
                <Link
                  to="/kontakt#formular"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0a0a0a] text-white text-[14px] font-semibold rounded-full hover:bg-[#1a1a1a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:ring-offset-2"
                  data-cta-location="hero"
                >
                  Angebot anfragen
                </Link>
                <Link
                  to="/kontakt#rueckruf"
                  className="text-[#0a0a0a] text-[14px] font-medium hover:text-[#374151] transition-colors duration-200 underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] focus:ring-offset-2 focus:ring-opacity-50"
                  data-cta-location="hero-secondary"
                >
                  Beratung buchen →
                </Link>
              </div>

              <div className="text-[#0a0a0a] text-[14px] font-medium mb-3">
                Kostenlose Erstberatung
              </div>

              <div className="text-[#6b7280] text-[14px]">
                EU-Produktion • DSGVO-konform
              </div>
            </div>
            
            <div className="relative lg:flex justify-center order-first lg:order-last">
              <div className="bg-[#f8fafc] rounded-[24px] lg:rounded-[28px] p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)]">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={heroExplodedKit}
                    alt="Explodierte Ansicht eines veredelten Produkt-Sets auf weißem Hintergrund"
                    className="w-full h-full object-cover"
                    loading="eager"
                    style={{ filter: 'saturate(0.95)' }}
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