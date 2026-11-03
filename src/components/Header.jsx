import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { whatsappLink } from "../config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Tiragens", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#inicio" className="logo">
          <Sparkles size={23} />
          <span>Iago Nogueira <strong>Tarot</strong></span>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            Agendar consulta
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}