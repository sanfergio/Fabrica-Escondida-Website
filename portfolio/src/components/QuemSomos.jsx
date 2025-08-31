import React from "react";
import "./styles/QuemSomos.css";

const QuemSomos = () => {
  return (
    <div className="about-container">

                <div className="quote-box">
            <span className="quote-text">
              Mais de <span className="bold-quote">70% dos nossos clientes</span> nos
            contrataram para projetos
            adicionais <span className="bold-quote">depois de terem
            concluído</span> um primeiro trabalho
            conosco.
            </span>
            <span className="quote-author">
              — Apurado pelo nosso time
            </span>
          </div>


      {/* Left Side Content */}
      <div className="left-content">
        <div className="left-inside">
            <h1 className="main-title">
          Quem <span className="somos">somos?</span>
        </h1>
        <div className="content-wrapper">
          <p className="description">
            Somos a Fábrica Escondida, uma consultoria especializada na melhoria
            contínua dos resultados empresariais, por meio de um modelo consolidado de
            Gestão da Rotina e Gestão da Melhoria, com foco no fortalecimento da
            liderança e na disseminação do conhecimento organizacional.
          </p>
          <ul className="features-list">
            <li className="feature-item">
              <div className="bullet-point" />
              <span className="feature-text">
                Fundada em 2017, a Fábrica
                Escondida entregou trabalhos
                bem sucedidos para clientes dos
                mais diversos segmentos.
              </span>
            </li>
            <li className="feature-item">
              <div className="bullet-point" />
              <span className="feature-text">
                Contamos com profissionais
                experientes, que unem visão
                analítica e empatia para
                transformar desafios empresariais
                em resultados concretos.
              </span>
            </li>
          </ul>
        </div>
        </div>
      </div>
      
      {/* Right Side Content */}
      <div className="right-content">
        <div className="right-inside">
            <div className="right-inner">          
        </div>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;