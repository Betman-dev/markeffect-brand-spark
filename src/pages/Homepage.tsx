import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, CheckCircle, Zap, Clock, Palette, HeadphonesIcon, TrendingUp } from "lucide-react";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import heroGiveaways from "../assets/hero-giveaways.jpg";
import powerbankMockup from "../assets/powerbank-mockup.jpg";
import notebookMockup from "../assets/notebook-mockup.jpg";
import mugMockup from "../assets/mug-mockup.jpg";
import usbMockup from "../assets/usb-mockup.jpg";

const Homepage = () => {
  const usps = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium-Qualität aus der EU",
      description: "sorgfältig ausgewählte Lieferanten."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Schnelle Abwicklung",
      description: "verlässliche Zeitpläne und klare Kommunikation."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Individuelle Veredelung",
      description: "Siebdruck, Stick, Gravur, Digitaldruck."
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Beratung & Design",
      description: "Mockups und Druckdaten-Check inklusive."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Skalierbar",
      description: "von kleinen Serien bis Großauflagen."
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
      image: heroGiveaways,
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
    "Wir erstellen Mockups, prüfen Druckdaten und bemustern bei Bedarf.",
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
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Giveaways mit Markenwirkung –
                <span className="text-secondary block">
                  individuell veredelt.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Wir entwickeln Werbeartikel, die deine Marke greifbar machen. 
                EU-Qualität, schnelle Abwicklung, saubere Veredelung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" className="btn-hero-primary">
                  Angebot anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/galerie" className="btn-hero-outline">
                  Beispiele ansehen
                </Link>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <div className="image-hover">
                <img
                  src={heroGiveaways}
                  alt="Premium Werbeartikel und Giveaways von Markeffect"
                  className="w-full h-auto rounded-xl shadow-strong"
                />
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
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {usp.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Bereit, dein Giveaway zu schärfen?
            </h2>
            <Link
              to="/kontakt"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold
                         shadow-strong hover:shadow-medium transform hover:-translate-y-1 
                         transition-all duration-300 ease-out"
            >
              Unverbindliches Angebot anfordern
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;