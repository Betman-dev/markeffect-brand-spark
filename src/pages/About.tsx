import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Target, Heart, Lightbulb, CheckCircle } from "lucide-react";
import consultationHero from "../assets/consultation-hero.jpg";

const About = () => {
  const values = [
    {
      title: "Qualität ohne Kompromisse.",
      description: "Ausschließlich hochwertige Materialien und sorgfältig ausgewählte EU-Lieferanten."
    },
    {
      title: "Transparente Abläufe.",
      description: "Klare Kommunikation, verlässliche Zeitpläne und nachvollziehbare Prozesse."
    },
    {
      title: "Design, das im Einsatz überzeugt.",
      description: "Funktionale und ästhetische Lösungen, die Ihre Marke greifbar machen."
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
        title="Über Markeffect · Spezialist für veredelte Werbeartikel"
        description="Markeffect ist spezialisiert auf exklusive Werbeartikel mit klarer Markenwirkung. Wir kombinieren Beratung, Design und verlässliche EU-Produktion."
        keywords="Über uns, Werbeartikel Spezialist, EU-Produktion, Beratung Design"
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
                Markeffect ist spezialisiert auf exklusive Werbeartikel mit klarer Markenwirkung. 
                Wir kombinieren Beratung, Design und verlässliche EU-Produktion.
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
            <blockquote className="text-2xl font-semibold text-primary italic border-l-4 border-secondary pl-6">
              "Wenn dein Giveaway Eindruck macht – war's Markeffect."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Wofür wir stehen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`card-hover text-center fade-in-delay-${index + 1}`}
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;