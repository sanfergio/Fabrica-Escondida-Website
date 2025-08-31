// NossaHistoria.jsx
import React, { useEffect, useState } from "react";
import "./styles/NossaHistoria.css";

const NossaHistoria = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { num: "2017", title: "Nascimento", text: "Em um encontro de negócios em São Paulo, nasce a Fábrica Escondida focada na excelência operacional.", icon: "💡", color: "#c89d2d" },
    { num: "2018", title: "Primeiros Contratos", text: "A Fábrica Escondida fecha seus primeiros contratos, expandindo atuação em SP e MG.", icon: "📣", color: "#b8860b" },
    { num: "2021", title: "Expansão Regional", text: "Ampliamos presença em novos estados e fortalecemos nossa atuação no mercado.", icon: "🌍", color: "#0a2342" },
    { num: "2022", title: "50 Projetos Concluídos", text: "Alcançamos 50 projetos concluídos e presença em Tocantins, RJ e Amazonas.", icon: "📈", color: "#2ecc71" },
    { num: "2023", title: "Academia de Gestão", text: "Lançamos a Academia de Gestão para desenvolver as soft skills de nossos clientes.", icon: "🎓", color: "#27b9c3" },
    { num: "2025", title: "Crescimento e Consolidação", text: "Ano de fortalecimento da marca, ampliando atuação e garantindo alta performance no mercado.", icon: "🏆", color: "#8a2be2" },
  ];

  return (
<div className="nh">
  <header className="nh-head">
    <h1 className="nh-title azul">LINHA DO TEMPO</h1>
    <p className="nh-sub dourado">Fábrica Escondida</p>
  </header>

  <div className="nh-timeline">
    {items.map((it, i) => (
      <div key={it.num} className={`nh-item ${i % 2 === 0 ? "top" : "bottom"}`}>
        <div className="nh-node" style={{ background: it.color }}>
          {it.num}
        </div>
        <div className="nh-card">
          <div className="nh-icon">{it.icon}</div>
          <h3 className="nh-card-title" style={{ color: it.color }}>{it.title}</h3>
          <p className="nh-card-text">{it.text}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="nh-mobile">
    {items.map((it) => (
      <div key={it.num} className="nh-mobile-item">
        <div className="nh-mobile-node" style={{ background: it.color }}>{it.num}</div>
        <div className="nh-mobile-card">
          <div className="nh-mobile-icon">{it.icon}</div>
          <h3 className="nh-mobile-card-title" style={{ color: it.color }}>{it.title}</h3>
          <p className="nh-mobile-card-text">{it.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default NossaHistoria;
