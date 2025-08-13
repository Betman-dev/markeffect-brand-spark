import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, Gift, Palette, Truck, HeadphonesIcon } from "lucide-react";
import powerbankMockup from "../assets/powerbank-mockup.jpg";
import notebookMockup from "../assets/notebook-mockup.jpg";
import mugMockup from "../assets/mug-mockup.jpg";
import usbMockup from "../assets/usb-mockup.jpg";

const Services = () => {
  const serviceCategories = [
    {
      title: "Tech & Electronics",
      description: "Moderne Technik-Giveaways für das digitale Zeitalter",
      items: ["Powerbanks", "USB-Sticks", "Wireless Charger", "Bluetooth-Speaker", "Smart-Gadgets"],
      image: powerbankMockup
    },
    {
      title: "Büro & Schreibwaren",
      description: "Elegante Begleiter für den professionellen Alltag",
      items: ["Premium-Notizbücher", "Kugelschreiber-Sets", "Organizer", "Schreibmappen", "Kalender"],
      image: notebookMockup
    },
    {
      title: "Lifestyle & Alltag",
      description: "Praktische Gegenstände für den täglichen Gebrauch",
      items: ["Tassen & Becher", "Trinkflaschen", "Taschen", "Textilien", "Regenschirme"],
      image: mugMockup
    },
    {
      title: "Events & Messen",
      description: "Spezielle Giveaways für Ihre Veranstaltungen",
      items: ["Give-Away-Pakete", "Messestände-Ausstattung", "Besucherpräsente", "VIP-Geschenke", "Teilnahme-Erinnerungen"],
      image: usbMockup
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Beratung",
      description: "Wir analysieren Ihre Bedürfnisse und entwickeln erste Konzeptideen",
      icon: <HeadphonesIcon className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Konzeption",
      description: "Detaillierte Planung und Visualisierung Ihrer individuellen Giveaways",
      icon: <Palette className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Produktion",
      description: "Hochwertige Fertigung unter strengen Qualitätskriterien",
      icon: <Gift className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Lieferung",
      description: "Termingerechte Lieferung direkt zu Ihnen oder Ihren Veranstaltungen",
      icon: <Truck className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="Leistungen - Premium Werbeartikel & Giveaways | Markeffect Services"
        description="Entdecken Sie unser umfassendes Leistungsspektrum: Tech-Gadgets, Büroartikel, Lifestyle-Produkte und Event-Giveaways. Individuelle Beratung und hochwertige Umsetzung."
        keywords="Werbeartikel Leistungen, Tech Giveaways, Büroartikel, Lifestyle Produkte, Event Geschenke, individuelle Beratung"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Von Tech-Gadgets bis zu eleganten Lifestyle-Produkten – wir entwickeln 
              maßgeschneiderte Giveaways, die perfekt zu Ihrer Marke passen und 
              nachhaltigen Eindruck hinterlassen.
            </p>
            <Link to="/kontakt" className="btn-hero-primary">
              Kostenlose Beratung anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Giveaway-Kategorien
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wählen Sie aus unserem breiten Spektrum hochwertiger Werbeartikel – 
              alle individuell an Ihre Markenidentität angepasst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className={`card-hover fade-in-delay-${index % 2 + 1}`}
              >
                <div className="image-hover mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Unser Prozess
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von der ersten Idee bis zur finalen Umsetzung – so entstehen Ihre 
              individuellen Premium-Giveaways bei Markeffect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center fade-in-delay-${index % 2 + 1}`}
              >
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4 text-secondary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Was uns auszeichnet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover fade-in">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Keine Mindestbestellmenge
              </h3>
              <p className="text-muted-foreground">
                Ob 10 Stück für ein kleines Event oder 10.000 für eine große Kampagne – 
                wir realisieren jede Anfrage mit der gleichen Sorgfalt und Qualität.
              </p>
            </div>
            <div className="card-hover fade-in-delay-1">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Schnelle Umsetzung
              </h3>
              <p className="text-muted-foreground">
                Dank unserer effizienten Prozesse und zuverlässigen Partner können wir 
                auch kurzfristige Anfragen termingerecht umsetzen.
              </p>
            </div>
            <div className="card-hover fade-in">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Umweltbewusst
              </h3>
              <p className="text-muted-foreground">
                Nachhaltigkeit ist uns wichtig. Wir bieten umweltfreundliche Materialien 
                und nachhaltige Produktionsverfahren an.
              </p>
            </div>
            <div className="card-hover fade-in-delay-1">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Kompletter Service
              </h3>
              <p className="text-muted-foreground">
                Von der Beratung über Design und Produktion bis hin zur Logistik – 
                alles aus einer Hand für Ihr perfektes Giveaway-Projekt.
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
              Bereit für Ihr nächstes Giveaway-Projekt?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam die perfekten Werbeartikel für Ihre 
              Marke entwickeln. Unverbindlich und kostenlos.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold
                         shadow-strong hover:shadow-medium transform hover:-translate-y-1 
                         transition-all duration-300 ease-out"
            >
              Jetzt Projekt anfragen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;