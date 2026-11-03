import { Heart, Compass, Sun, Sparkles, ArrowUpRight } from "lucide-react";
import { whatsappLink } from "../config";

const services = [
  {
    icon: Heart,
    number: "01",
    title: "Amor e Relacionamentos",
    description:
      "Reflexões sobre relacionamentos, sentimentos, conexões e caminhos afetivos.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Caminhos e Decisões",
    description:
      "Uma leitura para explorar possibilidades e refletir sobre escolhas importantes.",
  },
  {
    icon: Sun,
    number: "03",
    title: "Vida Profissional",
    description:
      "Uma perspectiva simbólica sobre carreira, projetos e desenvolvimento pessoal.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Tiragem Geral",
    description:
      "Uma leitura abrangente para refletir sobre diferentes áreas da sua vida.",
  },
];

export default function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">DESCUBRA AS POSSIBILIDADES</span>
          <h2>
            Encontre a tiragem ideal para
            <span> o seu momento.</span>
          </h2>
          <p>
            Cada leitura é uma oportunidade de reflexão e descoberta.
            Escolha o tema que deseja explorar.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <Icon size={30} strokeWidth={1.3} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href={whatsappLink(
                    `Olá! Gostaria de saber mais sobre a tiragem: ${service.title}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero saber mais <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}