import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Target, Heart, Lightbulb, CheckCircle } from "lucide-react";
import consultationHero from "../assets/consultation-hero.jpg";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-secondary" />,
      title: "Zielgerichtete Lösungen",
      description: "Jedes Giveaway wird strategisch auf Ihre Zielgruppe und Ihre Markenziele abgestimmt."
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Leidenschaft für Qualität",
      description: "Wir brennen für außergewöhnliche Werbeartikel, die echten Mehrwert schaffen."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-secondary" />,
      title: "Kreative Innovation",
      description: "Frische Ideen und innovative Ansätze für Giveaways, die aus der Masse herausstechen."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-secondary" />,
      title: "Verlässliche Partnerschaft",
      description: "Transparente Kommunikation und termingerechte Umsetzung – darauf können Sie sich verlassen."
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Gründung",
      description: "Start mit der Vision, Werbeartikel neu zu definieren"
    },
    {
      year: "2020",
      title: "Erste Erfolge",
      description: "Über 100 zufriedene Kunden aus verschiedenen Branchen"
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Erweiterung der Produktpalette und des Service-Angebots"
    },
    {
      year: "2024",
      title: "Marktführer",
      description: "Etabliert als Premium-Partner für exklusive Giveaways"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Über Markeffect - Ihr Partner für Premium Werbeartikel | Unsere Geschichte"
        description="Erfahren Sie mehr über Markeffect: Unser Team, unsere Werte und unsere Mission, Unternehmen mit hochwertigen, individuellen Giveaways zum Erfolg zu verhelfen."
        keywords="Über uns, Markeffect Team, Werbeartikel Experten, Unternehmensgeschichte, Premium Giveaways"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Über Markeffect
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Wir sind mehr als nur ein Anbieter von Werbeartikeln. Als Ihr strategischer Partner 
                entwickeln wir Giveaways, die Ihre Marke zum Leben erwecken und nachhaltigen 
                Eindruck bei Ihrer Zielgruppe hinterlassen.
              </p>
            </div>
            <div className="fade-in-delay-1">
              <div className="image-hover">
                <img
                  src={consultationHero}
                  alt="Markeffect Team bei der Beratung"
                  className="w-full h-auto rounded-xl shadow-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
              Unsere Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Wir glauben, dass jedes Unternehmen einzigartig ist – und seine Werbeartikel sollten es auch sein. 
              Deshalb entwickeln wir keine Standardlösungen, sondern maßgeschneiderte Giveaways, die perfekt 
              zu Ihrer Markenidentität passen und Ihre Botschaft authentisch transportieren.
            </p>
            <blockquote className="text-2xl font-semibold text-primary italic border-l-4 border-secondary pl-6">
              "Wenn dein Giveaway Eindruck macht - war's Markeffect."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Unsere Werte
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diese Prinzipien leiten uns bei allem, was wir tun – von der ersten Idee 
              bis zur finalen Umsetzung Ihrer Giveaway-Projekte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`card-hover flex items-start space-x-4 fade-in-delay-${index % 2 + 1}`}
              >
                <div className="flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Unser Weg
            </h2>
            <p className="text-xl text-muted-foreground">
              Von der Vision zur Realität – die Entwicklung von Markeffect
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`card-hover flex items-center space-x-6 fade-in-delay-${index % 2 + 1}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
              Unser Versprechen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-lg shadow-soft">
                <h3 className="font-semibold text-primary mb-3">100% Individuell</h3>
                <p className="text-sm text-muted-foreground">
                  Jedes Projekt wird speziell für Sie entwickelt – keine Massenware
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-soft">
                <h3 className="font-semibold text-primary mb-3">Premium Qualität</h3>
                <p className="text-sm text-muted-foreground">
                  Ausschließlich hochwertige Materialien und erstklassige Verarbeitung
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-soft">
                <h3 className="font-semibold text-primary mb-3">Persönliche Betreuung</h3>
                <p className="text-sm text-muted-foreground">
                  Ihr direkter Ansprechpartner von der ersten Idee bis zur Umsetzung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;