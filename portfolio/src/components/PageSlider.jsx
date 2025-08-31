import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/PageSlider.css";

export default function PageSlider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [slideDirection, setSlideDirection] = useState("");
  const [showHint, setShowHint] = useState(false);

  const routes = [
    "/",
    "/quem-somos",
    "/nossa-historia",
    "/servicos",
    "/metodo",
    "/clientes",
    "/contato"
  ];
  const currentIndex = routes.indexOf(location.pathname);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Reset slideDirection após animação
  useEffect(() => {
    const timeout = setTimeout(() => setSlideDirection(""), 600);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Mostrar hint apenas na Home
  useEffect(() => {
    if (location.pathname === "/") {
      setShowHint(true);
      const timer = setTimeout(() => setShowHint(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const navigateNext = () => {
    if (currentIndex < routes.length - 1) {
      setSlideDirection("left");
      navigate(routes[currentIndex + 1]);
    }
  };

  const navigatePrev = () => {
    if (currentIndex > 0) {
      setSlideDirection("right");
      navigate(routes[currentIndex - 1]);
    }
  };

  const goToPage = (index) => {
    if (index !== currentIndex) {
      setSlideDirection(index > currentIndex ? "left" : "right");
      navigate(routes[index]);
    }
  };

  // ===== Swipe Detection =====
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      navigateNext(); // 👉
    } else if (distance < -minSwipeDistance) {
      navigatePrev(); // 👈
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={`page-slider slide-${slideDirection}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Setas só aparecem no desktop (CSS esconde no mobile) */}
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

      {/* Hint inicial */}
      {showHint && location.pathname === "/" && (
        <div>
          <div className="page-hint-overlay"></div>
          <div className="page-hint-right">
            <span>
              Deslize ou clique <br /> para seguir
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
