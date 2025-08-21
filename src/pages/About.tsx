import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Clock, User, Shield, Calendar, CheckCircle, Mail, ArrowRight } from "lucide-react";
import founderPortrait from "../assets/founder-portrait.jpg";
import workspaceDesk from "../assets/workspace-desk.jpg";
import embroideryMacro from "../assets/embroidery-macro.jpg";
import laserEngravingMacro from "../assets/laser-engraving-macro.jpg";
import padPrintingMacro from "../assets/pad-printing-macro.jpg";
import teamMember1 from "../assets/team-member-1.jpg";
import teamMember2 from "../assets/team-member-2.jpg";

const About = () => {
  const processSteps = [
    {
      step: "1",
      title: "Ihre Anfrage",
      description: "Sie senden uns Idee, Menge und Logo",
      time: "15 min"
    },
    {
      step: "2", 
      title: "Unser Vorschlag",
      description: "Passende Produkte und erstes Mockup",
      time: "24 h"
    },
    {
      step: "3",
      title: "Ihre Freigabe", 
      description: "Finale Abstimmung und Produktionsstart",
      time: "Freigabe"
    },
    {
      step: "4",
      title: "Ihre Lieferung",
      description: "Produktion und pünktliche Auslieferung", 
      time: "Produktion"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah",
      role: "Projektmanagement", 
      email: "sarah@markeffect.de",
      image: teamMember1
    },
    {
      name: "Marcus",
      role: "Design & Veredelung",
      email: "marcus@markeffect.de", 
      image: teamMember2
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

  const caseSnippets = [
    {
      problem: "IT-Startup benötigte einheitliche Onboarding-Kits für neue Mitarbeiter",
      solution: "Maßgeschneiderte Welcome-Boxen mit Notebook, Powerbank und personalisierten Zugangskarten",
      result: "95% positive Rückmeldungen neuer Teammitglieder beim Onboarding"
    },
    {
      problem: "Consulting-Firma suchte nachhaltige Kundengeschenke für Jahresabschluss",
      solution: "Hochwertige Bambos-Notizblöcke mit Gravur und recycelte Kugelschreiber-Sets",
      result: "Drei Folgeaufträge durch begeisterte Kunden in Q1"
    },
    {
      problem: "Event-Agentur brauchte Last-Minute Giveaways für Messe (5 Tage Vorlauf)",
      solution: "Express-Produktion von USB-Sticks mit Lasergravur aus verfügbarem Lagerbestand", 
      result: "Pünktliche Lieferung am Veranstaltungstag, Kunde gewann Neukunden auf der Messe"
    }
  ];

  const promises = [
    {
      icon: Clock,
      title: "Mockup in 24 h",
      description: "Verlässliche Vorschau binnen eines Arbeitstages"
    },
    {
      icon: User,
      title: "Feste Ansprechperson", 
      description: "Ihr persönlicher Projektbetreuer von Anfang bis Ende"
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Datenschutz und Sicherheit haben bei uns höchste Priorität"
    },
    {
      icon: Calendar,
      title: "Termintreue",
      description: "Zugesagte Liefertermine werden zu 99,2% eingehalten"
    }
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
                  Seit 2018 entwickeln wir Werbeartikel, die Ihre Marke greifbar machen. 
                  Unser Fokus liegt auf durchdachtem Design, hochwertiger Veredelung und 
                  verlässlicher Umsetzung – damit Ihr Giveaway den gewünschten Eindruck hinterlässt.
                </p>
                
                <div className="bg-muted p-8 rounded-lg">
                  <div className="flex items-start gap-6">
                    <img 
                      src={founderPortrait}
                      alt="Thomas Müller, Gründer Markeffect" 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-medium text-foreground mb-2">Thomas</p>
                      <p className="text-muted-foreground italic mb-4">
                        "Jedes Produkt trägt Ihre Marke – deshalb muss es perfekt sein."
                      </p>
                      <div className="text-2xl font-script text-primary">Thomas</div>
                    </div>
                  </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-lg text-muted-foreground mb-3">{member.role}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {member.email}
                </a>
              </div>
            ))}
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

      {/* Case Snippets */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Herausforderungen, die wir gelöst haben
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseSnippets.map((case_, index) => (
              <div key={index} className="bg-muted p-8 rounded-lg">
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Problem:</h4>
                  <p className="text-muted-foreground">{case_.problem}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Lösung:</h4>
                  <p className="text-muted-foreground">{case_.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ergebnis:</h4>
                  <p className="text-muted-foreground">{case_.result}</p>
                </div>
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise, index) => (
              <div key={index} className="text-center">
                <promise.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{promise.title}</h3>
                <p className="text-muted-foreground">{promise.description}</p>
              </div>
            ))}
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
              alt="Arbeitsplatz bei Markeffect"
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hier entstehen Ihre Ideen: Von der ersten Skizze bis zum finalen Mockup.
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