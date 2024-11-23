import react from "react";
import Header from "@/components/Header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Composant global affiché sur toutes les pages */}
      <Header />
      {/* Contenu de la page spécifique */}
      <main className="container mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;