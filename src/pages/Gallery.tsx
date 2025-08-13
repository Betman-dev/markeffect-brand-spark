import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import powerbankMockup from "../assets/powerbank-mockup.jpg";
import notebookMockup from "../assets/notebook-mockup.jpg";
import mugMockup from "../assets/mug-mockup.jpg";
import usbMockup from "../assets/usb-mockup.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: powerbankMockup,
      title: "Premium Powerbank Serie",
      category: "Tech & Electronics",
      description: "Elegante Powerbanks mit individueller Gravur und LED-Anzeige für eine Finanzberatung",
      features: ["10.000 mAh Kapazität", "Wireless Charging", "LED-Display", "Gravur möglich"]
    },
    {
      image: notebookMockup,
      title: "Executive Notizbuch Collection",
      category: "Büro & Schreibwaren",
      description: "Hochwertige Ledernotizbücher mit Prägung für eine Unternehmensberatung",
      features: ["Echtleder-Cover", "240 Seiten", "Elastik-Verschluss", "Prägung inklusive"]
    },
    {
      image: mugMockup,
      title: "Corporate Coffee Cups",
      category: "Lifestyle & Alltag",
      description: "Stilvolle Keramiktassen für das tägliche Branding im Büroalltag",
      features: ["Hochwertige Keramik", "Spülmaschinenfest", "Individuelle Farben", "Logo-Druck"]
    },
    {
      image: usbMockup,
      title: "Business USB-Stick Serie",
      category: "Tech & Electronics",
      description: "Edle USB-Sticks aus Metall für eine IT-Beratungsgesellschaft",
      features: ["32 GB Speicher", "USB 3.0", "Metall-Gehäuse", "Lasergravur"]
    },
    {
      image: powerbankMockup,
      title: "Event Powerbank Special",
      category: "Events & Messen",
      description: "Limitierte Edition für eine Branchenmesse mit 2.000 Teilnehmern",
      features: ["5.000 mAh", "Kompakt-Design", "Event-Branding", "Lanyard inklusive"]
    },
    {
      image: notebookMockup,
      title: "Sustainability Notebooks",
      category: "Nachhaltigkeit",
      description: "Umweltfreundliche Notizbücher aus recycelten Materialien",
      features: ["Recycling-Papier", "Bambus-Cover", "Klimaneutral", "FSC-zertifiziert"]
    }
  ];

  const testimonials = [
    {
      quote: "Die Powerbanks von Markeffect haben auf unserer Messe für großes Aufsehen gesorgt. Qualität und Design waren perfekt!",
      author: "Dr. Sarah Schmidt",
      company: "TechInnovate GmbH",
      project: "Messe-Giveaways 2024"
    },
    {
      quote: "Endlich Giveaways, die zu unserem Premium-Anspruch passen. Die Beratung war exzellent und das Ergebnis übertraf unsere Erwartungen.",
      author: "Michael Weber",
      company: "Premium Consulting",
      project: "Executive Geschenk-Sets"
    },
    {
      quote: "Die nachhaltigen Notizbücher spiegeln perfekt unsere Unternehmenswerte wider. Unsere Kunden sind begeistert!",
      author: "Lisa Müller",
      company: "Green Solutions AG",
      project: "Nachhaltige Werbeträger"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Galerie - Inspirationen & Referenzen | Markeffect Giveaway Portfolio"
        description="Entdecken Sie unsere Premium-Giveaway-Projekte: Von Tech-Gadgets bis Lifestyle-Produkten. Lassen Sie sich von unseren Referenzen inspirieren!"
        keywords="Giveaway Galerie, Referenzen, Werbeartikel Beispiele, Premium Geschenke, Inspiration, Portfolio"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Galerie & Inspiration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Lassen Sie sich von unseren bereits realisierten Projekten inspirieren. 
              Entdecken Sie die Vielfalt hochwertiger Giveaways, die wir für 
              Unternehmen verschiedenster Branchen entwickelt haben.
            </p>
            <Link to="/kontakt" className="btn-hero-primary">
              Ihr Projekt starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Unsere Referenz-Projekte
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jedes Projekt ist einzigartig – wie Ihr Unternehmen. 
              Hier sehen Sie eine Auswahl unserer erfolgreich umgesetzten Giveaway-Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`card-hover group fade-in-delay-${index % 3 + 1}`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {item.description}
                </p>
                
                <div className="space-y-1">
                  {item.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-xs text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Das sagen unsere Kunden
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Erfolgreiche Projekte sprechen für sich – hier sind einige 
              Stimmen unserer zufriedenen Kunden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`card-hover fade-in-delay-${index + 1}`}
              >
                <div className="text-secondary mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                  <div className="text-xs text-secondary mt-1">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
              Interessiert an einer bestimmten Kategorie?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["Tech & Electronics", "Büro & Schreibwaren", "Lifestyle", "Nachhaltigkeit"].map((category, index) => (
                <Link
                  key={index}
                  to="/leistungen"
                  className="p-4 border border-border rounded-lg hover:border-secondary hover:bg-muted/50 transition-colors text-sm font-medium text-muted-foreground hover:text-secondary"
                >
                  {category}
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground mb-6">
              Oder entdecken Sie unser komplettes Leistungsspektrum
            </p>
            <Link to="/leistungen" className="btn-hero-outline">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Lassen Sie sich inspirieren!
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Sie haben eine Idee oder möchten ein ähnliches Projekt realisieren? 
              Sprechen Sie uns an – wir entwickeln gemeinsam Ihr individuelles Giveaway-Konzept.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold
                         shadow-strong hover:shadow-medium transform hover:-translate-y-1 
                         transition-all duration-300 ease-out"
            >
              Projekt besprechen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;