import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Welche Mindestmenge braucht ihr für eine Anfrage?",
      answer: "Ab 25 Stück können wir wirtschaftlich produzieren. Je nach Artikel und Veredelung sind auch kleinere Mengen möglich – frag einfach nach."
    },
    {
      question: "Wie schnell könnt ihr liefern?",
      answer: "Standard-Lieferzeit beträgt 2-3 Wochen ab Freigabe des Entwurfs. Express-Service (5-10 Werktage) ist gegen Aufpreis möglich."
    },
    {
      question: "Macht ihr auch internationale Lieferungen?",
      answer: "Ja, wir liefern EU-weit. Versandkosten und Lieferzeiten teilen wir individuell mit."
    },
    {
      question: "Bekomme ich vor Produktion eine Vorschau?",
      answer: "Ja, du erhältst kostenlos digitale Entwürfe zur Freigabe. Physische Muster sind je nach Artikel gegen Aufpreis möglich."
    },
    {
      question: "Welche Dateiformate braucht ihr für Logos?",
      answer: "Am besten Vektordateien (AI, EPS, SVG) oder hochauflösende PNG/JPG mit transparentem Hintergrund (mindestens 300 DPI)."
    },
    {
      question: "Könnt ihr nachhaltige/Eco-Artikel anbieten?",
      answer: "Ja, wir haben eine große Auswahl an nachhaltigen Produkten: recycelte Materialien, Bio-Baumwolle, FSC-Papier, etc."
    },
    {
      question: "Ist eine Teillieferung möglich?",
      answer: "Bei größeren Mengen (ab 500 Stück) können wir auf Wunsch in Teilchargen liefern."
    },
    {
      question: "Bietet ihr auch Lagerung an?",
      answer: "Ja, wir können deine Artikel einlagern und bei Bedarf portionsweise versenden (Call-off-Service)."
    },
    {
      question: "Was kostet eine Änderung am Entwurf?",
      answer: "Kleinere Anpassungen (Farbe, Text) sind meist kostenlos. Größere Design-Änderungen berechnen wir nach Aufwand."
    },
    {
      question: "Wie läuft die Bezahlung ab?",
      answer: "Standardmäßig auf Rechnung (Zahlungsziel 14 Tage). Bei Neukunden oder größeren Aufträgen eventuell 50% Anzahlung."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-muted-foreground">
            Alles Wichtige zu Bestellung, Lieferung und Veredelung
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 py-2"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Deine Frage ist nicht dabei?
          </p>
          <a 
            href="#contact"
            className="btn-primary inline-flex items-center px-6 py-3 rounded-md font-medium"
          >
            Jetzt fragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;