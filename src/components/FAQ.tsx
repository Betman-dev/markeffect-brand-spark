import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Wie läuft die Anfrage ab?",
      answer: "Sie senden kurz Ihre Idee, Menge und Logo. Wir melden uns zeitnah mit passenden Vorschlägen und einem ersten Mockup."
    },
    {
      question: "Gibt es Mindestmengen?",
      answer: "Ja, das hängt vom Artikel und der Veredelung ab. Nennen Sie uns Ihre Wunschmenge – wir schlagen die sinnvollste Option vor."
    },
    {
      question: "Wie lange dauern Produktion und Lieferung?",
      answer: "Projektabhängig. Im Angebot erhalten Sie einen verbindlichen Zeitplan; auf Wunsch prüfen wir eine beschleunigte Umsetzung."
    },
    {
      question: "Welche Druckdaten benötigt ihr?",
      answer: "Vektordaten sind ideal. Falls nicht vorhanden, bereiten wir Ihr Logo auf und stimmen Farben und Platzierung gemeinsam ab."
    },
    {
      question: "Kann ich vorab ein Muster bekommen?",
      answer: "Ein digitales Mockup ist immer möglich; ein physisches Muster prüfen wir je nach Produkt und Verfügbarkeit."
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