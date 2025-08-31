import React, { useState } from "react";
import { Factory, CalendarCheck2, BookOpen, Target, RefreshCcw, Search, BarChart3, GraduationCap, Timer } from "lucide-react";
import './styles/Servicos.css';

const servicesData = [
  { id: 1, icon: Factory, title: "Competitividade industrial", image: "https://img.freepik.com/free-photo/chess-game-business-strategy-concept_53876-14820.jpg", description: "Em um cenário cada vez mais competitivo, as empresas precisam ter resultados superiores aos seus concorrentes. Para isso, auxiliamos nossos clientes em um modelo de busca de referências para traçar desafios e planos de ação estruturados para melhores resultados de custos e produtividade." },
  { id: 2, icon: CalendarCheck2, title: "Gerenciamento da rotina", image: "https://img.freepik.com/free-photo/man-checking-time-his-watch_329181-19661.jpg", description: "Implementamos um modelo de gerenciamento de resultados, que permite que profissionais sejam capazes de fazer gestão da rotina e de resolver problemas no dia-a-dia, garantindo estabilização dos processos para competitividade do negócio." },
  { id: 3, icon: BookOpen, title: "Gestão de conhecimento", image: "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg", description: "Transferimos conhecimento em gestão, capacitando a equipe dos nossos clientes em ferramentas e soluções como Lean, Gerenciamento da Rotina no Dia-a-Dia, Gemba Walk, Seis Sigma, Gestão do Tempo, Orçamento Base Zero, entre outras." },
  { id: 4, icon: Target, title: "Desdobramento de metas", image: "https://img.freepik.com/free-photo/high-angle-dart-bull-s-eye_23-2148443750.jpg", description: "Com base nas necessidades do negócio, realizamos o processo de desdobramento de metas, sendo fundamental para que as empresas tenham foco e que as soluções estejam alinhadas com os grandes desafios definidos pela alta administração." },
  { id: 5, icon: RefreshCcw, title: "Melhoria contínua", image: "https://img.freepik.com/free-photo/high-angle-male-coworkers-analyzing-graph-work_23-2148908844.jpg", description: "Com uso baseado na metodologia PDCA atuamos na busca de resultados superiores, através da redução de perdas e com uso de metodologias de soluções de problemas como MASP e Seis Sigma." },
  { id: 6, icon: Search, title: "Diagnóstico operacional", image: "https://img.freepik.com/free-photo/people-working-laptop-meeting_53876-64855.jpg", description: "Realizamos um estudo detalhado dos processos da organização, identificando perdas ocultas, gargalos e oportunidades de melhoria. A partir de análises estruturadas, fornecemos um panorama claro da situação atual e direcionamos planos de ação que permitem elevar a eficiência, reduzir custos e aumentar a produtividade." },
  { id: 7, icon: GraduationCap, title: "Educação e treinamento", image: "https://img.freepik.com/free-photo/medium-shot-people-chatting-table_23-2149304763.jpg", description: "Desenvolvemos programas de capacitação e treinamentos práticos para potencializar a performance da equipe, promovendo aprendizado contínuo e aplicado." },
  { id: 8, icon: Timer, title: "Método SMED", image: "https://img.freepik.com/free-photo/business-coworkers-shaking-hands-meeting-office-focus-is-businessman_637285-7009.jpg", description: "O SMED (Troca rápida de ferramentas) é uma metodologia que tem como foco a redução significativa do tempo de setup, permitindo maior flexibilidade e velocidade produtiva. Com sua aplicação, a empresa consegue reduzir paradas de máquina, aumentar a disponibilidade de equipamentos e atender demandas de forma mais ágil e competitiva." },
];

const Servicos = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <div className="services-container">
      <div className="services-content">

        {/* Header Mobile */}
        <div className="services-header2">
          <h1 className="services-title2">Nossos serviços</h1>
          <p className="services-description2">
            Conheça as soluções que desenvolvemos para impulsionar a eficiência, fortalecer a gestão e gerar resultados sustentáveis, apoiando sua empresa na conquista de metas estratégicas e no alcance de maior competitividade no mercado.
          </p>
        </div>

        {/* Left Side - Desktop */}
        <div className="services-left">
          <div className="services-header">
            <h1 className="services-title">Nossos serviços</h1>
            <p className="services-description">
              Conheça as soluções que desenvolvemos para impulsionar a eficiência, fortalecer a gestão e gerar resultados sustentáveis, apoiando sua empresa na conquista de metas estratégicas e no alcance de maior competitividade no mercado.
            </p>
          </div>
          <div className="services-grid">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`service-card ${isSelected ? 'service-card-selected' : ''}`}
                  style={{ backgroundColor: isSelected ? "#c89d2d" : "white", color: isSelected ? "white" : "#0a2342" }}
                >
                  <div className="service-card-content">
                    <IconComponent size={24} />
                    <span className="service-card-title">{service.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Display Card */}
        <div className="display-card">
          <div className="display-card-image">
            <img src={selectedService.image || "/placeholder.svg"} alt={selectedService.title} className="display-image" />
          </div>
          <div className="display-card-content">
            <h2 className="display-card-title">{selectedService.title}</h2>
            <p className="display-card-description">{selectedService.description}</p>
          </div>
        </div>

        {/* Mobile Cards Grid */}
        <div className="services-grid2">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`service-card ${isSelected ? 'service-card-selected' : ''}`}
                style={{ backgroundColor: isSelected ? "#c89d2d" : "white", color: isSelected ? "white" : "#0a2342" }}
              >
                <div className="service-card-content2">
                  <IconComponent size={24} />
                  <span className="service-card-title2">{service.title}</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Servicos;
