import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, Printer, Layers, Zap, Sparkles, Palette, HeadphonesIcon } from "lucide-react";
import servicesHero from "../assets/services-hero.jpg";

const Services = () => {
  const veredelungstechniken = [
    {
      icon: <Printer className="h-8 w-8 text-primary" />,
      title: "Siebdruck",
      description: "Hohe Deckkraft, ideal für große Flächen.",
      detail: "Beständig im Alltag."
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Tampondruck", 
      description: "Fein für kleine, gewölbte Flächen.",
      detail: "Scharfe Details."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Stickerei",
      description: "Hochwertige Haptik.",
      detail: "Langlebig auf Textilien."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lasergravur",
      description: "Präzise, edle Optik.",
      detail: "Abriebfest auf Metall/Holz."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Digitaldruck",
      description: "Mehrfarbig & fotorealistisch.",
      detail: "Schnelle Umsetzung."
    }
  ];

  const services = [
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
      title: "Design-Support",
      description: "Mockups, Farbabstimmung, Druckdaten-Check."
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-primary" />,
      title: "Abwicklung", 
      description: "Planung, Qualitätskontrolle, termingerechte Lieferung."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Veredelungen & Abwicklung · Siebdruck, Stick, Gravur"
        description="Professionelle Veredelungstechniken für Werbeartikel: Siebdruck, Tampondruck, Stickerei, Lasergravur, Digitaldruck. Design-Support und komplette Abwicklung."
        keywords="Siebdruck, Tampondruck, Stickerei, Lasergravur, Digitaldruck, Veredelung, Design-Support"
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Veredelungen & Abwicklung
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Professionelle Veredelungstechniken für langlebige Markenwirkung. 
              Von der Beratung bis zur Lieferung – alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Veredelungstechniken */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Veredelungstechniken
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {veredelungstechniken.map((technik, index) => (
              <div
                key={index}
                className={`card-hover text-center fade-in-delay-${index % 3 + 1}`}
              >
                <div className="flex justify-center mb-4">
                  {technik.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {technik.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {technik.description}
                </p>
                <p className="text-sm text-secondary font-medium">
                  {technik.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Unsere Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card-hover text-center fade-in-delay-${index + 1}`}
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
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
              Bereit für professionelle Veredelung?
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

export default Services;