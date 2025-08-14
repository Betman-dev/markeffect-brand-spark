import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <SEOHead
        title="Seite nicht gefunden · Markeffect"
        description="Die angeforderte Seite wurde nicht gefunden. Kehren Sie zur Startseite zurück oder fordern Sie ein unverbindliches Angebot an."
        keywords="404, Seite nicht gefunden, Markeffect"
      />

      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Verlaufen? Diese Seite gibt es nicht.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Zurück zur Startseite oder direkt eine Anfrage schicken – wir helfen gern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold
                           shadow-strong hover:shadow-medium transform hover:-translate-y-1 
                           transition-all duration-300 ease-out"
              >
                Startseite
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center bg-secondary text-white px-8 py-4 rounded-lg font-semibold
                           shadow-strong hover:shadow-medium transform hover:-translate-y-1 
                           transition-all duration-300 ease-out"
              >
                Angebot anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;