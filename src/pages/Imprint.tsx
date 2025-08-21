import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import imprintHero from "../assets/imprint-hero.jpg";
const Imprint = () => {
  return <Layout>
      <SEOHead title="Impressum - Markeffect | Rechtliche Informationen" description="Impressum von Markeffect: Alle rechtlichen Informationen, Kontaktdaten und Angaben gemäß § 5 TMG auf einen Blick." keywords="Impressum, Markeffect, rechtliche Informationen, Kontakt, TMG" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${imprintHero})`
      }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl font-bold text-white mb-8">
              Impressum
            </h1>
            <p className="text-white/90 mb-8">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Anbieter
                </h2>
                <div className="bg-muted p-8 rounded-lg">
                  <p className="text-muted-foreground mb-2">
                    <strong className="text-primary">Markeffect</strong>
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Anderter Str. 36c<br />
                    30629 Hannover<br />
                    Deutschland
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <strong>E-Mail:</strong> <a href="mailto:info@markeffect.de" className="text-secondary hover:underline">info@markeffect.de</a><br />
                    <strong>Website:</strong> <a href="https://www.markeffect.de" className="text-secondary hover:underline">www.markeffect.de</a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                
                
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Geschäftsführung
                </h2>
                <p className="text-muted-foreground mb-4">Bajram Gashi</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-muted-foreground mb-2">
                    Max Mustermann<br />
                    Anderter Str. 36c<br />
                    30629 Hannover
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Haftungsausschluss
                </h2>
                
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Haftung für Inhalte
                </h3>
                <p className="text-muted-foreground mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                  Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind 
                  wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder 
                  gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
                  die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-muted-foreground mb-6">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
                  den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
                  ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
                  möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese 
                  Inhalte umgehend entfernen.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-4">
                  Haftung für Links
                </h3>
                <p className="text-muted-foreground mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                  keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                  Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                  Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p className="text-muted-foreground mb-6">
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                  Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                  Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten 
                  Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
                  zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links 
                  umgehend entfernen.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-4">
                  Urheberrecht
                </h3>
                <p className="text-muted-foreground mb-4">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                  unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                  bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p className="text-muted-foreground mb-4">
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                  Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber 
                  erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden 
                  Inhalte Dritter als solche gekennzeichnet.
                </p>
                <p className="text-muted-foreground mb-6">
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten 
                  wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                  werden wir derartige Inhalte umgehend entfernen.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Streitbeilegung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) 
                  bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground mb-4">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Kontakt
                </h2>
                <p className="text-muted-foreground mb-4">
                  Bei Fragen zu diesem Impressum oder rechtlichen Angelegenheiten wenden Sie sich 
                  bitte an:
                </p>
                <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                  <p className="text-muted-foreground">
                    <strong>E-Mail:</strong> <a href="mailto:info@markeffect.de" className="text-secondary hover:underline">info@markeffect.de</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Imprint;