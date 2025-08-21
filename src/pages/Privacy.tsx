import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import privacyHero from "../assets/privacy-hero.jpg";
const Privacy = () => {
  return <Layout>
      <SEOHead title="Datenschutzerklärung - Markeffect | Ihre Daten sind sicher" description="Datenschutzerklärung von Markeffect: Erfahren Sie, wie wir Ihre persönlichen Daten schützen und verarbeiten. Transparenz und Sicherheit haben höchste Priorität." keywords="Datenschutz, DSGVO, Datenschutzerklärung, Markeffect, Datensicherheit" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${privacyHero})`
      }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl font-bold text-white mb-8">
              Datenschutzerklärung
            </h1>
            <p className="text-white/90 mb-8">Stand: August 2025</p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  1. Verantwortlicher
                </h2>
                <p className="text-muted-foreground mb-4">
                  Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="text-muted-foreground mb-2">
                    <strong>Markeffect</strong><br />
                    Anderter Str. 36c<br />
                    30629 Hannover<br />
                    Deutschland
                  </p>
                  <p className="text-muted-foreground mb-2">
                    E-Mail: info@markeffect.de
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  2. Allgemeine Hinweise
                </h2>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>
                
                <h3 className="text-xl font-semibold text-primary mb-3">
                  3.1 Server-Log-Dateien
                </h3>
                <p className="text-muted-foreground mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in 
                  so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                  Dies sind:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                  Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer 
                  Erhebung nicht mehr erforderlich sind.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-3">
                  3.2 Kontaktformular
                </h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                  gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-muted-foreground mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
                  Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen 
                  Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der 
                  effektiven Bearbeitung der an uns gerichteten Anfragen.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  4. Ihre Rechte
                </h2>
                <p className="text-muted-foreground mb-4">
                  Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden 
                  personenbezogenen Daten:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Recht auf Auskunft</li>
                  <li>Recht auf Berichtigung oder Löschung</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über 
                  die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  5. SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                  vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte 
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" 
                  auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p className="text-muted-foreground mb-4">
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie 
                  an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  6. Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  Diese Website verwendet nur technisch notwendige Cookies für den Betrieb der 
                  Website. Diese Cookies sind erforderlich, damit die Website ordnungsgemäß 
                  funktioniert und sind für die Bereitstellung unserer Dienstleistungen unbedingt 
                  erforderlich.
                </p>
                <p className="text-muted-foreground mb-4">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
                  informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von 
                  Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
                  Löschen der Cookies beim Schließen des Browser aktivieren.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  7. Änderungen der Datenschutzerklärung
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
                  Leistungen in der Datenschutzerklärung umzusetzen.
                </p>
                <p className="text-muted-foreground mb-4">
                  Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  8. Kontakt
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an 
                  <a href="mailto:datenschutz@markeffect.de" className="text-secondary hover:underline">
                    datenschutz@markeffect.de
                  </a> oder wenden Sie sich direkt an die für den Datenschutz verantwortliche 
                  Person in unserer Organisation.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Privacy;