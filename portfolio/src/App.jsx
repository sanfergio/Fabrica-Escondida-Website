import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="body">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">FE</span>
          <span className="logo-text">
            Fábrica <strong>Escondida</strong>
          </span>
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          <a href="#">Home</a>
          <a href="#">Quem Somos</a>
          <a href="#">Nossa História</a>
          <a href="#">Serviços</a>
          <a href="#">Método</a>
          <a href="#">Clientes</a>
          <a href="#">Contato</a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            <span className="azul">Fábrica</span>{" "}
            <span className="dourado">Escondida</span>
          </h1>
          <p>
            Transformamos negócios através de{" "}
            <strong className="azul">estratégias inovadoras</strong> e{" "}
            <strong className="azul">soluções personalizadas</strong> que geram
            resultados excepcionais.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn amarelo">
              Conheça Nossos Serviços
            </a>
            <a href="#" className="btn borda">
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
              <h3>15+</h3>
              <p>Anos de Experiência</p>
            </div>
          </div>
        </div>

        <div className="hero-img">
          <img
            src="https://img.freepik.com/fotos-gratis/equipe-de-negocios-trabalhando-em-um-projeto-de-negocios-no-escritorio_1303-15873.jpg"
            alt="Reunião de negócios"
          />
          <span className="tag ativa">Estratégia Ativa</span>
          <span className="tag crescimento">+40% Crescimento Médio</span>
        </div>
      </section>
    </div>
  );
}

export default App;
