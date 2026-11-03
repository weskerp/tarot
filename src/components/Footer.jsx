import { Sparkles } from "lucide-react";
import { siteConfig, whatsappLink } from "../config";
import InstagramIcon from "./icon/InstagramIcon";
import WhatsappIcon from "./icon/WhatsappIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#inicio" className="logo">
            <Sparkles size={22} />
            <span>Iago Nogueira <strong>Tarot</strong></span>
          </a>

          <p>
            Um espaço de acolhimento, reflexão e autoconhecimento
            através do Tarot.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Tiragens</a>
          <a href="#como-funciona">Como funciona</a>
        </div>

        <div className="footer-links">
          <h4>Contato</h4>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
          <WhatsappIcon className="w-6 h-6 text-pink-500" /> WhatsApp
          </a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
          <InstagramIcon className="w-6 h-6 text-pink-500" /> Instagram
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Iago Nogueira Tarot. Todos os direitos reservados.</p>
        <span>Feito com ✦ e propósito.</span>
      </div>
    </footer>
  );
}