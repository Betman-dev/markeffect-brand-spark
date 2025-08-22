import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ErrorBoundary from "../components/ErrorBoundary";
import { Link } from "react-router-dom";
import { Clock, User, Shield, Calendar, CheckCircle, Mail, ArrowRight, Users, Palette, Package } from "lucide-react";
import workspaceSamplesDesk from "../assets/workspace-samples-desk.jpg";
import embroideryMacro from "../assets/embroidery-macro.jpg";
import laserEngravingMacro from "../assets/laser-engraving-macro.jpg";
import padPrintingMacro from "../assets/pad-printing-macro.jpg";

const About = () => {
  const processSteps = [
    {
      step: "1",
      title: "Kickoff",
      description: "Idee, Ziel, Rahmen",
      time: "15 min"
    },
    {
      step: "2", 
      title: "Entwurf",
      description: "Vorschläge & Mockup",
      time: "24 h"
    },
    {
      step: "3",
      title: "Feinschliff & Freigabe", 
      description: "Muster, Farben, Platzierung",
      time: "Freigabe"
    },
    {
      step: "4",
      title: "Produktion & Lieferung",
      description: "termingerecht, EU-weit", 
      time: "Produktion"
    }
  ];

  const roleCards = [
    {
      icon: Users,
      title: "Beratung & Projektstart",
      description: "Ziel, Menge, Budget, Timing klären. Passende Artikel vorschlagen."
    },
    {
      icon: Palette,
      title: "Design & Mockups",
      description: "Logo-Platzierung, Farben, Muster. Erstes Mockup in 24 h."
    },
    {
      icon: Package,
      title: "Produktion & Logistik",
      description: "Veredelung, Qualitätssicherung, Versand mit Tracking."
    }
  ];

  const macroGallery = [
    {
      image: embroideryMacro,
      title: "Stickerei",
      description: "Saubere Kanten, langlebige Umsetzung."
    },
    {
      image: laserEngravingMacro,
      title: "Lasergravur", 
      description: "Präzise Konturen auf Metall und Glas."
    },
    {
      image: padPrintingMacro,
      title: "Tampondruck",
      description: "Hohe Deckkraft auf matten Oberflächen."
    }
  ];

  const useCases = [
    {
      title: "Welcome-Kits",
      description: "Kompakte Sets für Onboarding & Events."
    },
    {
      title: "Messe & Events",
      description: "Handliche Artikel, die direkt genutzt werden."
    },
    {
      title: "Mailings",
      description: "Flache Produkte für günstigen Versand."
    }
  ];

  const promises = [
    "Mockup in 24 h",
    "Feste Ansprechperson", 
    "DSGVO-konform",
    "Termintreue"
  ];

  return (
    <Layout>
      <SEOHead
        title="Wer hinter Markeffect steckt · Team, Rollen und Arbeitsweise"
        description="Markeffect – Team, Rollen und Arbeitsweise. Erstes Mockup in 24 h, feste Ansprechperson, hochwertige Veredelung und verlässliche EU-Produktion."
        keywords="Markeffect Team, Werbeartikel Experten, Design Mockups, Produktion EU"
        canonicalUrl="https://markeffect.de/ueber-uns"
      />

      <ErrorBoundary>
        {/* Intro Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-16 text-center">
                Wer hinter Markeffect steckt
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-16">
                <div className="lg:col-span-2">
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Wir gestalten Werbeartikel, die im Alltag wirklich genutzt werden. 
                    Unser Fokus: durchdachtes Design, hochwertige Veredelung und 
                    verlässliche Abläufe – vom ersten Mockup bis zur Lieferung.
                  </p>
                </div>
                
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Unser Antrieb</h3>
                  <p className="text-muted-foreground">
                    Weniger Streuware, mehr Lieblingsstücke. Wir empfehlen nur, was wir selbst verantworten würden.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  to="/kontakt#anfrage"
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  Kostenloses Mockup anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ihr Projekt, unsere Rollen
              </h2>
              <p className="text-xl text-muted-foreground">
                Eine feste Ansprechperson koordiniert alle Schritte.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-12">
              {roleCards.map((role, index) => (
                <div key={index} className="text-center bg-background p-8 rounded-lg">
                  <role.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-foreground mb-4">{role.title}</h3>
                  <p className="text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="mailto:info@markeffect.de"
                className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
              >
                info@markeffect.de
              </a>
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title} <span className="text-sm font-normal text-primary">({step.time})</span>
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
                <div key={index} className="text-center bg-background p-8 rounded-lg">
                  <img 
                    src={item.image}
                    alt={`Makro-Aufnahme: ${item.title} zeigt ${item.description.toLowerCase()}`}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                    width={800}
                    height={600}
                    loading="lazy"
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
                  <p className="text-lg text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promises Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12">
                Hinter den Kulissen
              </h2>
              <img 
                src={workspaceSamplesDesk}
                alt="Arbeitstisch mit Musterteilen, Farbkarten, Caps, Tassen, USB-Sticks und blauem Band als Akzent"
                className="w-full h-96 object-cover rounded-lg mb-8"
                width={1920}
                height={1080}
                loading="lazy"
              />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                So sieht unser Tisch aus, bevor ein Entwurf freigegeben wird – Muster, Farbkarten und Veredelungsproben.
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
            <Link 
              to="/kontakt#anfrage"
              className="inline-flex items-center px-8 py-4 bg-background text-foreground rounded-full font-semibold text-lg hover:bg-background/90 transition-colors"
            >
              Projekt starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </ErrorBoundary>
    </Layout>
  );
};

export default About;