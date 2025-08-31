import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideClass, setSlideClass] = useState("");
  const location = useLocation(); // Para detectar mudança de rota

  const activeClass = "active-link";

  useEffect(() => {
    // Quando a rota muda, adiciona animação de slide
    setSlideClass("slide-left"); // você pode alternar slide-left ou slide-right
    const timeout = setTimeout(() => setSlideClass(""), 500); // remove classe após animação
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <header className={`navbar ${slideClass}`}>
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
        <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : "")}>Home</NavLink>
        <NavLink to="/quem-somos" className={({ isActive }) => (isActive ? activeClass : "")}>Quem Somos</NavLink>
        <NavLink to="/nossa-historia" className={({ isActive }) => (isActive ? activeClass : "")}>Nossa História</NavLink>
        <NavLink to="/servicos" className={({ isActive }) => (isActive ? activeClass : "")}>Serviços</NavLink>
        <NavLink to="/metodo" className={({ isActive }) => (isActive ? activeClass : "")}>Método</NavLink>
        <NavLink to="/clientes" className={({ isActive }) => (isActive ? activeClass : "")}>Clientes</NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? activeClass : "")}>Contato</NavLink>
      </nav>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}

export default Header;
