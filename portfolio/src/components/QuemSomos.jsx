import React from "react";
import "./styles/QuemSomos.css";

const QuemSomos = () => {
  return (
    <section className="about-container">
      {/* Coluna esquerda */}
      <div className="left-content">
        <h1 className="main-title">
          Quem <span className="somos">somos?</span>
        </h1>

        <p className="description">
          Somos a Fábrica Escondida, uma consultoria especializada na melhoria
          contínua dos resultados empresariais, por meio de um modelo consolidado de
          Gestão da Rotina e Gestão da Melhoria, com foco no fortalecimento da
          liderança e na disseminação do conhecimento organizacional.
          <br /><br />
          Fundada em 2017, a Fábrica Escondida entregou trabalhos de sucesso
          para clientes de diversos segmentos.
          <br /><br />
          Profissionais experientes unem visão analítica e empatia para
          transformar desafios em resultados concretos.
        </p>
      </div>

      {/* Coluna direita */}
      <div className="right-content">
        <div className="overlay" />
        <div className="quote-box">
          <p className="quote-text">
            Mais de <span className="bold-quote">70% dos nossos clientes</span> nos
            contrataram para projetos adicionais{" "}
            <span className="bold-quote">após o primeiro trabalho</span>.
          </p>
          <span className="quote-author">— Apurado pelo nosso time</span>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
