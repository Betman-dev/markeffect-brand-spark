import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Stethoscope, GraduationCap, Factory, Briefcase, Users } from "lucide-react";

const IndustrySolutions = () => {
  const industries = [
    {
      icon: <Building2 className="h-12 w-12 text-secondary" />,
      title: "Finanzdienstleistung",
      description: "Vertrauensbildende Giveaways für Banken, Versicherungen und Beratungsunternehmen",
      solutions: [
        "Hochwertige Schreibwaren-Sets für Beratungsgespräche",
        "Elegante Visitenkartenhalter und Organizer",
        "Premium-Powerbanks für mobile Kunden",
        "Personalisierte Kalender und Planer"
      ],
      cta: "Vertrauen schaffen"
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-secondary" />,
      title: "Gesundheitswesen",
      description: "Praktische und hygienische Giveaways für medizinische Einrichtungen",
      solutions: [
        "Desinfektionsmittel-Spender mit Logo",
        "Medizinische Schreibwaren",
        "Gesundheits-Apps auf USB-Sticks",
        "Patientenaufklärung-Materialien"
      ],
      cta: "Gesundheit fördern"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-secondary" />,
      title: "Bildung & Forschung",
      description: "Inspirierende Giveaways für Schulen, Universitäten und Forschungseinrichtungen",
      solutions: [
        "Lernmittel und Schreibwaren",
        "USB-Sticks mit Bildungsinhalten",
        "Nachhaltige Notizbücher",
        "Tech-Gadgets für Studenten"
      ],
      cta: "Wissen vermitteln"
    },
    {
      icon: <Factory className="h-12 w-12 text-secondary" />,
      title: "Industrie & Technik",
      description: "Robuste und praktische Giveaways für industrielle Unternehmen",
      solutions: [
        "Sicherheitszubehör mit Branding",
        "Technische Messehilfen",
        "Werkzeug-Sets für Fachkräfte",
        "Industrielle USB-Sticks"
      ],
      cta: "Kompetenz zeigen"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-secondary" />,
      title: "Beratung & Services",
      description: "Professionelle Giveaways für Beratungsunternehmen und Dienstleister",
      solutions: [
        "Business-Accessoires für Meetings",
        "Präsentations-Hilfsmittel",
        "Networking-Geschenke",
        "Premium Office-Gadgets"
      ],
      cta: "Professionalität ausstrahlen"
    },
    {
      icon: <Users className="h-12 w-12 text-secondary" />,
      title: "Events & Marketing",
      description: "Aufmerksamkeitsstarke Giveaways für Veranstaltungen und Marketingkampagnen",
      solutions: [
        "Event-Bags und Goodie-Sets",
        "Foto-Accessoires mit Branding",
        "Social-Media-taugliche Gadgets",
        "Erinnerungs-Geschenke"
      ],
      cta: "Aufmerksamkeit erzeugen"
    }
  ];

  const benefits = [
    {
      title: "Branchenspezifische Expertise",
      description: "Wir kennen die besonderen Anforderungen Ihrer Branche und entwickeln entsprechende Lösungen."
    },
    {
      title: "Compliance & Richtlinien",
      description: "Alle Giveaways entsprechen den relevanten Branchen- und Compliance-Richtlinien."
    },
    {
      title: "Zielgruppengerechte Auswahl",
      description: "Jedes Giveaway wird speziell auf Ihre Zielgruppe und deren Bedürfnisse abgestimmt."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Branchenlösungen - Individuelle Giveaways für jede Industrie | Markeffect"
        description="Spezialisierte Werbeartikel-Lösungen für alle Branchen: Finanzen, Gesundheit, Bildung, Industrie, Beratung und Events. Branchenspezifische Expertise seit Jahren."
        keywords="Branchenlösungen, Finanzwesen Giveaways, Medizin Werbeartikel, Bildung Geschenke, Industrie Promotion, Event Marketing"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Branchenlösungen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Jede Branche hat ihre eigenen Anforderungen und Zielgruppen. 
              Wir entwickeln maßgeschneiderte Giveaway-Lösungen, die perfekt 
              zu Ihrem Markt und Ihren Kunden passen.
            </p>
            <Link to="/kontakt" className="btn-hero-primary">
              Branchenlösung anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Unsere Branchenexpertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von Finanzdienstleistungen bis zum Gesundheitswesen – 
              wir kennen die spezifischen Anforderungen Ihrer Branche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`card-hover fade-in-delay-${index % 3 + 1} h-full`}
              >
                <div className="flex justify-center mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  {industry.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li
                      key={solutionIndex}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {solution}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto">
                  <Link
                    to="/kontakt"
                    className="text-secondary font-semibold hover:text-primary transition-colors"
                  >
                    {industry.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Warum branchenspezifische Lösungen?
            </h2>
            <p className="text-xl text-muted-foreground">
              Generische Giveaways funktionieren nicht überall. 
              Wir berücksichtigen die Besonderheiten Ihrer Branche.
            </p>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`card-hover text-center fade-in-delay-${index + 1}`}
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Erfolgsgeschichten
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unsere branchenspezifischen Lösungen haben bereits 
              zahlreichen Unternehmen zum Erfolg verholfen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center fade-in">
              <div className="text-3xl font-bold text-secondary mb-4">250+</div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Projekte realisiert
              </h3>
              <p className="text-sm text-muted-foreground">
                Erfolgreich umgesetzte Branchenlösungen
              </p>
            </div>
            <div className="card-hover text-center fade-in-delay-1">
              <div className="text-3xl font-bold text-secondary mb-4">15+</div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Branchen abgedeckt
              </h3>
              <p className="text-sm text-muted-foreground">
                Verschiedene Industriezweige betreut
              </p>
            </div>
            <div className="card-hover text-center fade-in-delay-2">
              <div className="text-3xl font-bold text-secondary mb-4">98%</div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Kundenzufriedenheit
              </h3>
              <p className="text-sm text-muted-foreground">
                Weiterempfehlungsrate unserer Kunden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ihre Branche nicht dabei?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Kein Problem! Wir entwickeln für jede Branche die passenden Lösungen. 
              Sprechen Sie uns einfach an und lassen Sie uns gemeinsam die perfekten 
              Giveaways für Ihren Markt entwickeln.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold
                         shadow-strong hover:shadow-medium transform hover:-translate-y-1 
                         transition-all duration-300 ease-out"
            >
              Individuelle Beratung anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustrySolutions;