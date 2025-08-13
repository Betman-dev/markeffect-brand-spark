import { useState } from "react";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    budget: "",
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      budget: "",
      timeline: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Telefon",
      content: "+49 (0) 123 456 789",
      subtext: "Mo-Fr, 9:00-18:00 Uhr"
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "E-Mail",
      content: "info@markeffect.de",
      subtext: "Antwort binnen 24h"
    },
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      title: "Adresse",
      content: "Musterstraße 123",
      subtext: "12345 Musterstadt"
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Öffnungszeiten",
      content: "Mo-Fr: 9:00-18:00",
      subtext: "Sa: Nach Vereinbarung"
    }
  ];

  const processSteps = [
    "Kostenlose Erstberatung & Konzeptentwicklung",
    "Detaillierte Angebotserstellung mit Visualisierung",
    "Muster-Erstellung und finale Abstimmung",
    "Produktion und termingerechte Lieferung"
  ];

  return (
    <Layout>
      <SEOHead
        title="Kontakt - Jetzt Beratung anfragen | Markeffect Premium Giveaways"
        description="Kontaktieren Sie Markeffect für eine kostenlose Beratung zu Ihren individuellen Giveaway-Wünschen. Telefon, E-Mail oder persönlicher Termin - wir sind für Sie da!"
        keywords="Kontakt Markeffect, Giveaway Beratung, Werbeartikel Anfrage, kostenlose Beratung, individuelle Giveaways"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bereit für Giveaways, die begeistern? Sprechen Sie uns an! 
              Wir beraten Sie gerne kostenlos und unverbindlich zu Ihren individuellen Anforderungen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-hover fade-in">
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Projekt anfragen
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Unternehmen</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Betreff</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 w-full p-3 border border-border rounded-md bg-background"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="giveaways">Allgemeine Giveaway-Anfrage</option>
                      <option value="tech">Tech & Electronics</option>
                      <option value="office">Büro & Schreibwaren</option>
                      <option value="lifestyle">Lifestyle-Produkte</option>
                      <option value="event">Event & Messe</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget">Budget-Rahmen</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-border rounded-md bg-background"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="bis-1000">Bis 1.000 €</option>
                        <option value="1000-5000">1.000 - 5.000 €</option>
                        <option value="5000-10000">5.000 - 10.000 €</option>
                        <option value="ab-10000">Ab 10.000 €</option>
                        <option value="offen">Flexibel</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Zeitrahmen</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-border rounded-md bg-background"
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="asap">So schnell wie möglich</option>
                        <option value="2-weeks">In 2 Wochen</option>
                        <option value="1-month">In 1 Monat</option>
                        <option value="3-months">In 3 Monaten</option>
                        <option value="flexible">Flexibel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Ihre Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie uns Ihr Projekt, Ihre Zielgruppe und Ihre Vorstellungen..."
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="btn-hero-primary w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Anfrage senden
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-hover fade-in-delay-1">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Kontakt-Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {info.icon}
                      <div>
                        <div className="font-semibold text-primary">{info.title}</div>
                        <div className="text-muted-foreground">{info.content}</div>
                        <div className="text-sm text-muted-foreground">{info.subtext}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-hover fade-in-delay-2">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Unser Prozess
                </h3>
                <div className="space-y-3">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-hover fade-in-delay-2">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Warum Markeffect?
                </h3>
                <div className="space-y-3">
                  {[
                    "Kostenlose Erstberatung",
                    "Individuelle Lösungen",
                    "Premium Qualität",
                    "Schnelle Umsetzung"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Häufige Fragen
            </h2>
            <p className="text-xl text-muted-foreground">
              Die wichtigsten Antworten auf einen Blick
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-hover fade-in">
              <h3 className="font-semibold text-primary mb-3">
                Gibt es eine Mindestbestellmenge?
              </h3>
              <p className="text-muted-foreground text-sm">
                Nein, wir realisieren Projekte ab 10 Stück. Gerne beraten wir Sie 
                zur optimalen Menge für Ihr Budget und Ihre Ziele.
              </p>
            </div>
            <div className="card-hover fade-in-delay-1">
              <h3 className="font-semibold text-primary mb-3">
                Wie lange dauert die Umsetzung?
              </h3>
              <p className="text-muted-foreground text-sm">
                Die Produktionszeit variiert je nach Produkt und Menge. 
                Standardprodukte können oft binnen 2-3 Wochen realisiert werden.
              </p>
            </div>
            <div className="card-hover fade-in">
              <h3 className="font-semibold text-primary mb-3">
                Kann ich Muster erhalten?
              </h3>
              <p className="text-muted-foreground text-sm">
                Selbstverständlich! Wir erstellen gerne Muster oder Prototypen, 
                damit Sie sich von der Qualität überzeugen können.
              </p>
            </div>
            <div className="card-hover fade-in-delay-1">
              <h3 className="font-semibold text-primary mb-3">
                Bieten Sie auch nachhaltige Optionen?
              </h3>
              <p className="text-muted-foreground text-sm">
                Ja, Nachhaltigkeit ist uns wichtig. Wir haben eine große Auswahl 
                an umweltfreundlichen Materialien und Produktionsverfahren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;