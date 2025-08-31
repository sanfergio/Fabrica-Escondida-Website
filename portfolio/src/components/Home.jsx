import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          <span className="azul">Fábrica</span>{" "}
          <span className="dourado">Escondida</span>
        </h1>
        <p>
          Transformamos negócios através de
          <strong className="azul"> estratégias inovadoras </strong>
          e
          <strong className="azul"> soluções personalizadas </strong>
          que geram resultados excepcionais.
        </p>

        <div className="hero-buttons">
          <a href="/servicos" className="btn amarelo">
            Conheça Nossos Serviços
          </a>
          <a href="/contato" className="btn borda">
            Fale Conosco
          </a>
        </div>

        <div className="hero-numbers">
          <div>
            <h3>200+</h3>
            <p>Clientes Atendidos</p>
          </div>
          <div>
            <h3>95%</h3>
            <p>Taxa de Sucesso</p>
          </div>
          <div>
            <h3>8+</h3>
            <p>Anos de Experiência</p>
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src="https://img.freepik.com/fotos-gratis/equipe-de-negocios-trabalhando-em-um-projeto-de-negocios-no-escritorio_1303-15873.jpg"
          alt="Reunião de negócios"
          loading="lazy"
        />
        <span className="tag ativa">Estratégia Ativa</span>
        <span className="tag crescimento">+40% Crescimento Médio</span>
      </div>
    </section>
  );
};

export default Home;
