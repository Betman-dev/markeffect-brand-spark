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
      <section className="bg-white border-b border-[#eef2f7] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="max-w-[62ch]">
              {/* Eyebrow */}
              <div className="text-[#6b7280] text-sm font-medium mb-6 tracking-wide">
                Auf Anfrage • Antwort in 24–48 h
              </div>
              
              {/* Main Headline */}
              <h1 className="text-[56px] leading-[64px] font-extrabold tracking-[-0.02em] text-black mb-8">
                Giveaways mit
                <span className="block">Markenwirkung</span>
                <span className="block">– individuell veredelt.</span>
              </h1>
              
              {/* Subline */}
              <p className="text-[18px] leading-[28px] text-[#374151] mb-12 max-w-[52ch]">
                Beratung, Mockups & EU-Produktion. Wir liefern termingerecht – ohne Preisliste, 
                mit passender Kalkulation zu deinem Projekt.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Link
                  to="/kontakt#formular"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200"
                  data-cta-location="hero"
                >
                  Angebot anfordern
                </Link>
                <Link
                  to="/kontakt#rueckruf"
                  className="text-black text-sm font-medium hover:text-gray-600 transition-colors duration-200 underline underline-offset-4"
                  data-cta-location="hero-secondary"
                >
                  Beratung buchen →
                </Link>
              </div>
            </div>
            
            {/* Hero Image Card */}
            <div className="relative lg:flex justify-center">
              <div className="bg-[#f8fafc] rounded-[24px] p-8 shadow-lg shadow-black/5">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={heroProductMosaic}
                    alt="Premium Werbeartikel Sortiment – Tassen, Powerbanks und Textilien mit professioneller Veredelung"
                    className="w-full h-full object-cover saturate-90"
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