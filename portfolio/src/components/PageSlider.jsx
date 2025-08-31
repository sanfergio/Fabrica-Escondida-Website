import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/PageSlider.css";

export default function PageSlider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [slideDirection, setSlideDirection] = useState("left");
  const [showHint, setShowHint] = useState(false);

  const routes = ["/", "/quem-somos", "/nossa-historia", "/servicos", "/metodo", "/clientes", "/contato"];
  const currentIndex = routes.indexOf(location.pathname);

  // Slide suave ao mudar de rota
  useEffect(() => {
    setSlideDirection("left");
    const timeout = setTimeout(() => setSlideDirection(""), 600);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Mostrar hint apenas no carregamento inicial da página
  useEffect(() => {
    const handleLoad = () => {
      if (location.pathname === "/") {
        setShowHint(true);
        const timer = setTimeout(() => setShowHint(false), 6000); // some após 4s
        return () => clearTimeout(timer);
      }
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);


  const navigateNext = () => {
    if (currentIndex < routes.length - 1) navigate(routes[currentIndex + 1]);
  };
  const navigatePrev = () => {
    if (currentIndex > 0) navigate(routes[currentIndex - 1]);
  };

  const goToPage = (index) => {
    if (index !== currentIndex) navigate(routes[index]);
  };

  return (
    <div
      className={`page-slider slide-${slideDirection}`}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
    >
      {location.pathname !== "/" && (
        <button className="arrow left" onClick={navigatePrev}>
          &#10094;
        </button>
      )}

      <div className="slider-content">{children}</div>

      {location.pathname !== "/contato" && (
        <button className="arrow right" onClick={navigateNext}>
          &#10095;
        </button>
      )}

      {/* Carousel dots */}
      <div className="carousel-dots">
        {routes.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToPage(index)}
          />
        ))}
      </div>

      {showHint && location.pathname === "/" && location.pathname !== "/contato" && (
        <div>
          <div className="page-hint-overlay"></div>
          <div className="page-hint-right">
            <span> Clique aqui <br/> para seguir </span>
          </div>
        </div>
      )}
    </div>
  );
}
