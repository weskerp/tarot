import { ArrowDown, Sparkles, Moon, Star } from "lucide-react";
import { whatsappLink } from "../config";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">
            <Sparkles size={15} />
            Iago Nogueira TAROT
          </span>

          <h1>
            As respostas que você procura
            <span> podem estar nas cartas.</span>
          </h1>

          <p>
            Um momento para se conectar consigo mesma, encontrar novas
            perspectivas e iluminar os caminhos da sua jornada através
            do Tarot.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma consulta de Tarot.")}
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Consultar pelo WhatsApp
              <Sparkles size={17} />
            </a>

            <a href="#sobre" className="button-secondary">
              Conheça a Iago Nogueira
            </a>
          </div>

          <div className="hero-note">
            <Moon size={17} />
            <span>Seu momento de conexão e autoconhecimento.</span>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="moon-circle">
            <Moon size={115} strokeWidth={0.7} />
          </div>
          <Star className="star star-one" size={27} />
          <Star className="star star-two" size={17} />
          <Sparkles className="star star-three" size={23} />
          <div className="hero-card">
            <span>✦</span>
            <Moon size={46} strokeWidth={0.8} />
            <span>THE JOURNEY WITHIN</span>
          </div>
        </div>
      </div>

      <a href="#sobre" className="scroll-indicator" aria-label="Rolar para baixo">
        <ArrowDown size={19} />
      </a>
    </section>
  );
}