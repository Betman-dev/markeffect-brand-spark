import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Factory, GraduationCap, Heart, Building } from "lucide-react";
import industryHero from "../assets/industry-solutions-hero.jpg";

const IndustrySolutions = () => {
  const industries = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Messen & Events",
      description: "Maximale Sichtbarkeit am Stand.",
      products: ["Lanyards", "Notizbücher", "Goodie-Sets"]
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: "Industrie",
      description: "Robuste Giveaways für harten Einsatz.",
      products: ["Meterstäbe", "Edelstahl-Becher", "Work-Caps"]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Bildung",
      description: "Sinnvolle Artikel für Campus & Kurse.",
      products: ["Notizblöcke", "Stifte-Sets", "Stoffbeutel"]
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Healthcare",
      description: "Hygiene & Vertrauen im Fokus.",
      products: ["Desi-Gels", "Masken-Cases", "Trinkflaschen"]
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Behörden",
      description: "Funktional, seriös, langlebig.",
      products: ["Kugelschreiber", "Mappen", "Schlüsselbänder"]
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Branchenlösungen · Messen, Industrie, Bildung, Healthcare, Behörden"
        description="Spezialisierte Giveaway-Lösungen für verschiedene Branchen: Messen & Events, Industrie, Bildung, Healthcare und Behörden. Individuell angepasst an Ihre Anforderungen."
        keywords="Branchenlösungen, Messe Giveaways, Industrie Werbeartikel, Bildung Geschenke, Healthcare Promotion, Behörden Werbeartikel"
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${industryHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Branchenlösungen
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Jede Branche hat spezielle Anforderungen. Unsere Giveaways sind 
              perfekt auf Ihren Einsatzbereich abgestimmt.
            </p>
            <Link to="/kontakt" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Branchenlösung anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`card-hover fade-in-delay-${index % 3 + 1}`}
              >
                <div className="flex justify-center mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 text-center">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-center">
                  {industry.description}
                </p>
                <div className="space-y-2 mb-6">
                  {industry.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      {product}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-secondary font-medium">
                    Individuelle Kalkulation – jetzt anfragen
                  </p>
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
              Ihre Branche nicht dabei?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Sprechen Sie uns an – wir entwickeln für jede Branche die 
              passende Giveaway-Lösung.
            </p>
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

export default IndustrySolutions;