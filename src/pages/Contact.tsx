import { useState } from "react";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Mail, Phone, MapPin, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    quantity: "",
    occasion: "",
    deadline: "",
    finishing: "",
    message: "",
    privacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast.error("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }
    toast.success("Danke! Wir melden uns innerhalb von 24–48 Stunden mit Rückfragen oder einem ersten Vorschlag.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      quantity: "",
      occasion: "",
      deadline: "",
      finishing: "",
      message: "",
      privacy: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <Layout>
      <SEOHead
        title="Angebot anfragen · Markeffect"
        description="Kontaktieren Sie Markeffect für Ihre individuellen Giveaway-Wünsche. Kostenlose Beratung und unverbindliches Angebot binnen 24-48 Stunden."
        keywords="Kontakt, Angebot anfragen, Giveaway Beratung, Werbeartikel Anfrage"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Erzähl uns kurz, was du vorhast – wir melden uns binnen 24–48 Std.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-hover fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Firma *</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Beispiel GmbH"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@firma.de"
                    required
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
                    placeholder="+49 ..."
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="quantity">Stückzahl / Rahmen</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="z. B. 250–500"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="finishing">Gewünschte Veredelung</Label>
                  <Input
                    id="finishing"
                    name="finishing"
                    value={formData.finishing}
                    onChange={handleChange}
                    placeholder="Druck, Stick, Gravur, ..."
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="occasion">Anlass / Einsatz *</Label>
                <Input
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  placeholder="Messe, Kundengeschenke, Onboarding, ..."
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Nachricht *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Kurz dein Vorhaben und Designwunsch"
                  required
                  className="mt-1"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacy: !!checked }))}
                  required
                />
                <Label htmlFor="privacy" className="text-sm leading-relaxed">
                  Ich stimme zu, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden. 
                  Hinweise in der <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
                </Label>
              </div>

              <Button type="submit" className="btn-hero-primary">
                <Send className="mr-2 h-4 w-4" />
                Angebot anfragen
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;