import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {

  return (
    <Layout>
      <SEOHead
        title="Angebot anfragen · Markeffect"
        description="Kontaktieren Sie Markeffect für Ihre individuellen Giveaway-Wünsche. Kostenlose Beratung und unverbindliches Angebot binnen 24-48 Stunden."
        keywords="Kontakt, Angebot anfragen, Giveaway Beratung, Werbeartikel Anfrage"
      />

      {/* Hero Section */}
      <section className="hero py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(var(--mx-ink-700))' }}>
              Angebot anfragen
            </h1>
            <p className="lead mb-8 leading-relaxed" style={{ color: 'hsl(var(--mx-ink-600))' }}>
              Erzähl uns kurz, was du vorhast – wir melden uns binnen 24–48 Std.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4" style={{ color: 'hsl(var(--mx-primary))' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--mx-ink-700))' }}>
                E-Mail
              </h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@markeffect.de" className="hover:text-primary transition-colors">
                  info@markeffect.de
                </a>
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4" style={{ color: 'hsl(var(--mx-primary))' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'hsl(var(--mx-ink-700))' }}>
                Adresse
              </h3>
              <p className="text-muted-foreground">
                Anderter Str. 36c<br />
                30629 Hannover
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;