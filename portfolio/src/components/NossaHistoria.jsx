import React, { useEffect, useState } from "react";
import "./styles/NossaHistoria.css";

const NossaHistoria = () => {
  const [progress, setProgress] = useState(0);

  // Simula o carregamento da barra
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) { // chega quase no final
          clearInterval(interval);
          return 95;
        }
        return prev + 1; // incremento de 1%
      });
    }, 50); // velocidade do carregamento
    return () => clearInterval(interval);
  }, []);

  const items = [
    { num: "2017", title: "Nascimento", text: "Em um encontro de negócios em São Paulo, nasce a Fábrica Escondida focada na excelência operacional.", icon: "💡", color: "#F1542A" },
    { num: "2018", title: "Primeiros Contratos", text: "A Fábrica Escondida fecha seus primeiros contratos, expandindo atuação em SP e MG.", icon: "📣", color: "#F4B63E" },
    { num: "2021", title: "Expansão Regional", text: "Ampliamos presença em novos estados e fortalecemos nossa atuação no mercado.", icon: "🌍", color: "#27B9C3" },
    { num: "2022", title: "50 Projetos Concluídos", text: "Alcançamos 50 projetos concluídos e presença em Tocantins, RJ e Amazonas.", icon: "📈", color: "#0A6A8A" },
    { num: "2023", title: "Academia de Gestão", text: "Lançamos a Academia de Gestão para desenvolver as soft skills de nossos clientes.", icon: "🎓", color: "#8A2BE2" },
    { num: "2025", title: "Crescimento e Consolidação", text: "Ano de fortalecimento da marca, ampliando atuação e garantindo alta performance no mercado.", icon: "🏆", color: "#2E8B57" },
  ];

  return (
    <div className="nh">
      <div className="nh-head">
        <h1 className="nh-titulo">LINHA DO TEMPO</h1>
        <div className="nh-sub">Fábrica Escondida</div>
        <div className="nh-palette">
          <span style={{ background: "#F1542A" }} />
          <span style={{ background: "#F4B63E" }} />
          <span style={{ background: "#27B9C3" }} />
          <span style={{ background: "#0A6A8A" }} />
          <span style={{ background: "#8A2BE2" }} />
          <span style={{ background: "#2E8B57" }} />
        </div>
      </div>

      <div className="nh-wrap">
        {/* Barra animada estilo Netflix/YouTube */}
        <div className="nh-rail">
          <div
            className="nh-rail-fill"
            style={{ width: `${progress}%` }}
          >
            <span
              className="nh-rail-dot"
              style={{ left: `${progress}%` }}
            />
          </div>
        </div>

        <ul className="nh-list">
          {items.map((it, i) => (
            <li key={it.num} className={`nh-item ${i % 2 === 0 ? "top" : "bottom"}`}>
              <div></div>
              <div className={`nh-node-card ${i % 2 === 0 ? "top" : "bottom"}`}>
                <div className={`nh-node`}>
                  <span
                    className="nh-node-ring"
                    style={{ boxShadow: `0 6px 14px rgba(0,0,0,.15)` }}
                  />
                  <span
                    className="nh-node-core"
                    style={{ background: it.color }}
                  >
                    {it.num}
                  </span>
                </div>

                <div className={"nh-stem"} style={{ background: it.color }}>
                  <span
                    className="nh-stem-dot"
                    style={{ background: it.color }}
                  />
                </div>
              </div>

              <div className="nh-card">
                <div className="nh-icon" aria-hidden>
                  {it.icon}
                </div>
                <h3 className="nh-card-title" style={{ color: it.color }}>
                  {it.title}
                </h3>
                <p className="nh-card-text">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NossaHistoria;
