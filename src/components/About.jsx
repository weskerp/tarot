import { MoonStar, Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about-grid">
        <div className="about-art">
          <div className="about-frame">
            <div className="about-symbol">
              <MoonStar size={100} strokeWidth={0.7} />
              <span>✦</span>
            </div>
            <p>ENCONTRE SUA LUZ</p>
          </div>
          <div className="about-decoration">✧</div>
        </div>

        <div className="about-text">
          <span className="section-label">UM ENCONTRO COM VOCÊ</span>

          <h2>
            Muito além das cartas,
            <span> uma jornada de autoconhecimento.</span>
          </h2>

          <p>
            O Tarot é uma ferramenta simbólica que nos convida a olhar
            para dentro, refletir sobre nossas escolhas e explorar
            diferentes perspectivas diante dos caminhos da vida.
          </p>

          <p>
            Na Iago Nogueira Tarot, cada atendimento é um momento de escuta,
            acolhimento e interpretação, respeitando sua história,
            suas dúvidas e seu momento.
          </p>

          <div className="about-features">
            <div>
              <Heart size={21} />
              <span>Acolhimento</span>
            </div>
            <div>
              <MoonStar size={21} />
              <span>Autoconhecimento</span>
            </div>
            <div>
              <Sparkles size={21} />
              <span>Conexão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}