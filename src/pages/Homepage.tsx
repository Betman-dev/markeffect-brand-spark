import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, CheckCircle } from "lucide-react";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import heroGiveaways from "../assets/hero-giveaways.jpg";
import powerbankMockup from "../assets/powerbank-mockup.jpg";
import notebookMockup from "../assets/notebook-mockup.jpg";
import mugMockup from "../assets/mug-mockup.jpg";
import usbMockup from "../assets/usb-mockup.jpg";

const Homepage = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Premium Qualität",
      description: "Ausschließlich hochwertige Materialien und erstklassige Verarbeitung für nachhaltigen Markenerfolg."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Individuelle Beratung",
      description: "Persönliche Betreuung von der ersten Idee bis zur erfolgreichen Umsetzung Ihres Projekts."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-secondary" />,
      title: "Keine Massenware",
      description: "Maßgeschneiderte Lösungen, die perfekt zu Ihrer Marke und Ihren Anforderungen passen."
    }
  ];

  const products = [
    {
      image: powerbankMockup,
      title: "Powerbanks",
      description: "Mobile Energiequellen mit Ihrem Logo"
    },
    {
      image: notebookMockup,
      title: "Notizbücher",
      description: "Elegante Begleiter für erfolgreiche Meetings"
    },
    {
      image: mugMockup,
      title: "Tassen & Becher",
      description: "Tägliche Markenpräsenz im Büroalltag"
    },
    {
      image: usbMockup,
      title: "USB-Sticks",
      description: "Praktische Datenträger mit Wiedererkennungswert"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Markeffect - Premium Werbeartikel mit Markenwirkung | Individuelle Giveaways"
        description="Hochwertige, individuell gebrandete Giveaways für Unternehmen aller Branchen. Keine Massenware - maßgeschneiderte Werbegeschenke, die Eindruck machen."
        keywords="Werbeartikel, Giveaways, Promotion, Markenwirkung, individuell, hochwertig, Unternehmensgeschenke"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Wenn dein Giveaway
                <span className="text-secondary block">
                  Eindruck macht
                </span>
                war's Markeffect.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Hochwertige, individuell gebrandete Giveaways für Unternehmen aller Branchen. 
                Keine Massenware – maßgeschneiderte Lösungen, die Ihre Marke unvergesslich machen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" className="btn-hero-primary">
                  Jetzt kostenlos beraten lassen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/galerie" className="btn-hero-outline">
                  Inspiration entdecken
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

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Warum Markeffect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir setzen auf Qualität statt Quantität und schaffen Werbegeschenke, 
              die bei Ihren Kunden einen bleibenden Eindruck hinterlassen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`card-hover text-center fade-in-delay-${index + 1}`}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Beliebte Giveaway-Kategorien
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Entdecken Sie unsere meistgefragten Werbeartikel – 
              individuell gestaltet und perfekt auf Ihre Marke abgestimmt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className={`card-hover fade-in-delay-${index % 2 + 1}`}
              >
                <div className="image-hover mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/leistungen" className="btn-hero-primary">
              Alle Leistungen entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <div className="flex justify-center mb-6">
              <Star className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Bereit für Giveaways, die begeistern?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam Werbeartikel entwickeln, die Ihre Zielgruppe 
              nachhaltig beeindrucken und Ihre Marke unvergesslich machen.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold
                         shadow-strong hover:shadow-medium transform hover:-translate-y-1 
                         transition-all duration-300 ease-out"
            >
              Kostenloses Beratungsgespräch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;