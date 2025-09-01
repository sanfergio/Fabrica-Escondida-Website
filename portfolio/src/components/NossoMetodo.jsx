import React from 'react';
import './styles/NossoMetodo.css';
import { FlaskConical, TrendingUp, BookOpen, Handshake } from "lucide-react";

const NossoMetodo = () => {
  const processSteps = [
    {
      title: "Adaptação",
      description: "Etapa de experimentação por parte do cliente ",
      image: <FlaskConical className="step-image" />,
    },
    {
      title: "Metas",
      description: "Remuneração atrelada às metas planejadas",
      image: <TrendingUp className="step-image" />,
    },
    {
      title: "Formação",
      description: "Entrega de material didático para a formação de novos colaboradores",
      image: <BookOpen className="step-image" />,
    },
    {
      title: "Colaboração",
      description: "Abordagem colaborativa e de execução",
      image: <Handshake className="step-image" />,
    },
  ];

  return (
    <div className="method-container">
      {/* Left side - Main image with overlapping text box */}
      <div className="left-section">


        {/* Title and description */}
        <div className="content-header2">
          <h1 className="method-title">
            Nosso <span className="destaque">método</span>
          </h1>
          <p className="method-description">
            A abordagem da Fábrica Escondida é leve, flexível e participativa. Buscamos uma
            relação ganho-ganho. Para nós, um projeto bem sucedido significa atingir metas,
            enraizar as competências necessárias para gestão e prover a independência dos clientes mediante a
            novos projetos.
          </p>
        </div>

        <div className="main-image-container">
          <img 
            src="https://img.freepik.com/fotos-gratis/os-empresarios-e-mulheres-de-negocios-milenares-da-asia-que-encontram-ideias-de-brainstorming-sobre-novos-colegas-do-projeto-de-papelada-trabalhando-juntos-planejando-a-estrategia-de-sucesso-desfrutam-do-trabalho-em-equipe-no-pequeno-escritorio-noturno-moderno_7861-2386.jpg" 
            alt="Nossa metodologia em ação" 
            className="main-image"
          />
          {/* Overlapping text box in lower right corner */}
          <div className="overlay-text-box">
            <p className="overlay-text">
            Usamos do ciclo PDCA (Planejar,
            Executar, Checar, Agir) para
            buscar eficiência e melhores
            resultados.
            </p>
          </div>
        </div>

        {/* Process steps - four images horizontally */}
        <div className="process-grid2">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-image-container">
                {step.image}
              </div>
              <h3 className="step-title">
                {step.title}
              </h3>
              <p className="step-description">
                {step.description}
              </p>
            </div>
          ))}
</div>

        
      </div>

      {/* Right side - Title, text, and process steps */}
      <div className="right-section">
        {/* Title and description */}
        <div className="content-header">
          <h1 className="method-title">
            Nosso <span className="destaque">método</span>
          </h1>
          <p className="method-description">
            A abordagem da Fábrica Escondida é leve, flexível e participativa. Buscamos uma
            relação ganha-ganha. Para nós, um projeto bem sucedido significa atingir metas,
            enraizar as competências necessárias para gestão e prover a independência dos clientes mediante a
            novos projetos.
          </p>
        </div>
        {/* Process steps - four images horizontally */}
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-image-container">
                {step.image}
              </div>
              <h3 className="step-title">
                {step.title}
              </h3>
              <p className="step-description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NossoMetodo;
