import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "./config";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Contact />
      </main>

      <Footer />

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}