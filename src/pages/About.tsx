import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Clock, User, Shield, Calendar, CheckCircle, Mail, ArrowRight, Users, Palette, Package } from "lucide-react";
import workspaceDesk from "../assets/workspace-desk.jpg";
import embroideryMacro from "../assets/embroidery-macro.jpg";
import laserEngravingMacro from "../assets/laser-engraving-macro.jpg";
import padPrintingMacro from "../assets/pad-printing-macro.jpg";

const About = () => {
  const processSteps = [
    {
      step: "1",
      title: "Kickoff",
      description: "Kurze Abstimmung zu Idee, Menge und Logo",
      time: "15 min"
    },
    {
      step: "2", 
      title: "Entwurf",
      description: "Passende Produkte und erstes Mockup",
      time: "24 h"
    },
    {
      step: "3",
      title: "Feinschliff & Freigabe", 
      description: "Finale Abstimmung und Produktionsstart",
      time: "Freigabe"
    },
    {
      step: "4",
      title: "Produktion & Lieferung",
      description: "Fertigung und pünktliche Auslieferung", 
      time: "Produktion"
    }
  ];

  const roleCards = [
    {
      icon: Users,
      title: "Beratung & Projektstart",
      description: "Erste Abstimmung, Produktauswahl und Machbarkeitscheck"
    },
    {
      icon: Palette,
      title: "Design & Mockups",
      description: "Visualisierung, Farbanpassung und Freigabeschleife"
    },
    {
      icon: Package,
      title: "Produktion & Logistik",
      description: "Fertigung, Qualitätskontrolle und termingerechte Lieferung"
    }
  ];

  const macroGallery = [
    {
      image: embroideryMacro,
      title: "Stickerei",
      description: "Präzise Fadenführung für langlebige Markenwirkung"
    },
    {
      image: laserEngravingMacro,
      title: "Lasergravur", 
      description: "Millimetergenaue Gravuren in Holz, Metall und Kunststoff"
    },
    {
      image: padPrintingMacro,
      title: "Tampondruck",
      description: "Hochauflösende Drucke auf gewölbten Oberflächen"
    }
  ];

  const useCases = [
    {
      title: "Welcome-Kits",
      description: "Onboarding-Pakete für neue Mitarbeiter",
      details: "Notebooks, Powerbanks, Zugangskarten – individuell zusammengestellt"
    },
    {
      title: "Messe & Events",
      description: "Giveaways für Veranstaltungen",
      details: "USB-Sticks, Kugelschreiber, Taschen – auch kurzfristig verfügbar"
    },
    {
      title: "Mailings",
      description: "Beigaben für Direktsendungen",
      details: "Kleine Aufmerksamkeiten, die Ihre Post unvergesslich machen"
    }
  ];

  const promises = [
    "Erstes Mockup in 24 h",
    "Feste Ansprechperson", 
    "DSGVO-konform",
    "Termintreue"
  ];

  return (
    <Layout>
      <SEOHead
        title="Über Markeffect · Wer hinter den vedelten Werbeartikeln steckt"
        description="Lernen Sie das Team von Markeffect kennen. Erfahren Sie mehr über unseren Prozess, unser Versprechen und warum Kunden uns für exklusive Werbeartikel vertrauen."
        keywords="Über Markeffect, Team, Prozess, Versprechen, Werbeartikel Spezialist"
      />

      {/* Intro Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">
              Wer hinter Markeffect steckt
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Wir entwickeln Werbeartikel, die Ihre Marke greifbar machen. 
                  Unser Fokus liegt auf durchdachtem Design, hochwertiger Veredelung und 
                  verlässlicher Umsetzung – damit Ihr Giveaway den gewünschten Eindruck hinterlässt.
                </p>
                
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Unser Antrieb</h3>
                  <p className="text-muted-foreground italic">
                    "Weniger Streuware, mehr Wertschätzung – jedes Produkt soll Ihre Marke stärken."
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="/kontakt#anfrage"
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Kostenloses Mockup anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Dein Projekt, unser Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-12">
            {roleCards.map((role, index) => (
              <div key={index} className="text-center">
                <role.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{role.title}</h3>
                <p className="text-muted-foreground">{role.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Sie erhalten eine feste Ansprechperson für Ihr Projekt – von der ersten Idee bis zur Lieferung.
            </p>
            <div className="flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5 text-primary" />
              <a 
                href="mailto:info@markeffect.de"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Kontakt: info@markeffect.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ihr Weg zum perfekten Giveaway
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Macro Gallery */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Veredelung im Detail
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {macroGallery.map((item, index) => (
              <div key={index} className="text-center">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Typische Anwendungsfälle
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-muted p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{useCase.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">{useCase.description}</p>
                <p className="text-sm text-muted-foreground">{useCase.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unser Versprechen
            </h2>
            <div className="flex flex-wrap justify-center gap-8 text-lg text-muted-foreground">
              {promises.map((promise, index) => (
                <span key={index} className="flex items-center">
                  {promise}
                  {index < promises.length - 1 && <span className="ml-8 text-primary">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hinter den Kulissen
            </h2>
            <img 
              src={workspaceDesk}
              alt="Arbeitsplatz mit Musterteilen und Farbkarten"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Musterteile, Farbkarten und das blaue Band – hier entstehen Ihre Ideen.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Wenn dein Giveaway Eindruck macht – war's Markeffect.
          </h2>
          <a 
            href="/kontakt#anfrage"
            className="inline-flex items-center px-8 py-4 bg-background text-foreground rounded-lg font-semibold text-lg hover:bg-background/90 transition-colors"
          >
            Projekt starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;