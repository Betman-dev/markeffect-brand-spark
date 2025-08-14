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
      image: mugMockup,
      caption: "Emaille-Becher – Siebdruck – Outdoor-Event"
    },
    {
      image: notebookMockup,
      caption: "Cap – Stickerei – Messecrew"
    },
    {
      image: powerbankMockup,
      caption: "Powerbank – Lasergravur – Kundengeschenk"
    },
    {
      image: usbMockup,
      caption: "USB-Stick – Gravur – IT-Unternehmen"
    },
    {
      image: mugMockup,
      caption: "Keramik-Tasse – Digitaldruck – Büroausstattung"
    },
    {
      image: notebookMockup,
      caption: "Notizbuch – Prägung – Beratungsunternehmen"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Projektbeispiele & Mockups · Markeffect"
        description="Einblicke in realisierte Projekte und Mockups. Lassen Sie sich von unseren Giveaway-Lösungen inspirieren – von Emaille-Bechern bis Powerbanks."
        keywords="Projektbeispiele, Giveaway Mockups, Werbeartikel Referenzen, Markeffect Galerie"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Galerie
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Einblicke in realisierte Projekte und Mockups.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`card-hover group fade-in-delay-${index % 3 + 1}`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <p className="text-center text-muted-foreground text-sm">
                  {item.caption}
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

export default Gallery;