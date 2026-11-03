import { MessageCircle, CalendarDays, Layers, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Entre em contato",
    description: "Chame a Iago Nogueira pelo WhatsApp e conte o que deseja explorar.",
  },
  {
    icon: CalendarDays,
    title: "Escolha sua tiragem",
    description: "Conheça as opções disponíveis e combine os detalhes do atendimento.",
  },
  {
    icon: Layers,
    title: "Realize sua consulta",
    description: "Sua leitura acontece online, com interpretação das cartas.",
  },
  {
    icon: Sparkles,
    title: "Receba sua leitura",
    description: "Um momento dedicado à reflexão e ao autoconhecimento.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section" id="como-funciona">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">SIMPLES E ACOLHEDOR</span>
          <h2>Como funciona sua <span>experiência?</span></h2>
          <p>Seu encontro com o Tarot começa com uma simples conversa.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="step-card" key={step.title}>
                <div className="step-icon">
                  <Icon size={27} strokeWidth={1.4} />
                </div>
                <span className="step-number">ETAPA 0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}