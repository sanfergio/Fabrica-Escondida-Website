import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img 
          src="https://fabricaescondida.com.br/FE-IMAGES/logo_icon3.png" 
          alt="Logo Fábrica Escondida" 
        />
        <span className="logo-text">
          Fábrica <strong>Escondida</strong>
        </span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Quem Somos</a>
        <a href="#">Nossa História</a>
        <a href="#">Serviços</a>
        <a href="#">Método</a>
        <a href="#">Clientes</a>
        <a href="#">Contato</a>
      </nav>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}

export default Header;
