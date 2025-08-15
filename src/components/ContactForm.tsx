import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    quantity: "",
    deadline: "",
    category: "",
    finishing: "",
    message: "",
    budget: "",
    usecase: "",
    privacy: false,
    hp_website: "" // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Check honeypot
    if (formData.hp_website) {
      return; // Spam detected
    }

    if (!formData.privacy) {
      setError("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xdkdebkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          quantity: formData.quantity,
          deadline: formData.deadline,
          category: formData.category,
          finishing: formData.finishing,
          message: formData.message,
          budget: formData.budget,
          usecase: formData.usecase
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      setError("Senden nicht möglich. Bitte später erneut versuchen oder info@markeffect.de schreiben.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--mx-ink-700))' }}>
          Danke für deine Anfrage!
        </h2>
        <p className="text-lg mb-8" style={{ color: 'hsl(var(--mx-ink-600))' }}>
          Wir melden uns innerhalb von 24–48 h mit ersten Entwürfen.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center px-6 py-3 rounded-lg font-medium"
        >
          <Home className="mr-2 h-4 w-4" />
          Zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Link 
          to="#contact"
          className="btn-secondary inline-flex items-center px-6 py-3 rounded-lg font-medium mb-8"
        >
          Angebot anfragen
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" id="contact">
        {/* Honeypot field */}
        <input
          type="text"
          name="hp_website"
          value={formData.hp_website}
          onChange={handleChange}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

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
            <Label htmlFor="quantity">Stückzahl *</Label>
            <Select onValueChange={(value) => handleSelectChange('quantity', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Wähle Menge" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<50">&lt;50</SelectItem>
                <SelectItem value="50-100">50–100</SelectItem>
                <SelectItem value="100-250">100–250</SelectItem>
                <SelectItem value="250-500">250–500</SelectItem>
                <SelectItem value=">500">&gt;500</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="deadline">Deadline *</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="category">Kategorie *</Label>
            <Select onValueChange={(value) => handleSelectChange('category', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Wähle Kategorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="textilien">Textilien</SelectItem>
                <SelectItem value="schreibgeraete">Schreibgeräte</SelectItem>
                <SelectItem value="tassen">Tassen/Becher</SelectItem>
                <SelectItem value="technik">Technik</SelectItem>
                <SelectItem value="nachhaltig">Nachhaltig</SelectItem>
                <SelectItem value="messe">Messe/Event</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <p className="text-sm text-muted-foreground mt-1">
              Vektorlogo bevorzugt (AI/EPS/SVG)
            </p>
          </div>
          <div>
            <Label htmlFor="budget">Budget (optional)</Label>
            <Select onValueChange={(value) => handleSelectChange('budget', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Ungefährer Rahmen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<500">bis 500€</SelectItem>
                <SelectItem value="500-1000">500–1.000€</SelectItem>
                <SelectItem value="1000-2500">1.000–2.500€</SelectItem>
                <SelectItem value="2500-5000">2.500–5.000€</SelectItem>
                <SelectItem value=">5000">über 5.000€</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="usecase">Anlass / Einsatz</Label>
          <Input
            id="usecase"
            name="usecase"
            value={formData.usecase}
            onChange={handleChange}
            placeholder="Messe, Kundengeschenke, Onboarding, ..."
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
            Hinweise in der <Link to="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link>.
          </Label>
        </div>

        {error && (
          <div className="text-red-600 text-sm p-3 bg-red-50 rounded-lg">
            {error}
          </div>
        )}

        <Button 
          type="submit" 
          className="btn-primary w-full sm:w-auto"
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />
          {isSubmitting ? "Wird gesendet..." : "Angebot anfragen"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;