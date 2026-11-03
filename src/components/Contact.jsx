import { Sparkles, MessageCircle, MoonStar } from "lucide-react";
import { whatsappLink } from "../config";

export default function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="contact-box">
          <MoonStar className="contact-moon" size={65} strokeWidth={0.8} />

          <span className="section-label">SEU MOMENTO COMEÇA AQUI</span>

          <h2>
            Permita-se olhar para
            <span> novos caminhos.</span>
          </h2>

          <p>
            Agende seu atendimento online e descubra uma nova forma
            de refletir sobre suas dúvidas e possibilidades.
          </p>

          <a
            href={whatsappLink("Olá, Iago Nogueira! Gostaria de agendar meu atendimento.")}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            <MessageCircle size={19} />
            Falar com a Iago Nogueira
          </a>

          <div className="contact-decoration">
            <Sparkles size={17} />
            <span>Iago Nogueira TAROT</span>
            <Sparkles size={17} />
          </div>
        </div>
      </div>
    </section>
  );
}