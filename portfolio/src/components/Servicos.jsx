import React, { useState } from "react";
import { Factory, CalendarCheck2, BookOpen, Target, RefreshCcw, Search, BarChart3, GraduationCap, Timer } from "lucide-react";
import './Servicos.css';

const servicesData = [
  {
    id: 1,
    icon: Factory,
    title: "Competitividade industrial",
    image: "https://img.freepik.com/free-photo/chess-game-business-strategy-concept_53876-14820.jpg?t=st=1756567868~exp=1756571468~hmac=0aa758c1f77fdc907312241e7e1963a60ee0571dccee2f5454431879e45e8141&w=1480",
    description:
      "Em um cenário cada vez mais competitivo, as empresas precisam ter resultados superiores aos seus concorrentes. Para isso, auxiliamos nossos clientes em um modelo de busca de referências para traçar desafios e planos de ação estruturados para melhores resultados de custos e produtividade.",
  },
  {
    id: 2,
    icon: CalendarCheck2,
    title: "Gerenciamento da rotina",
    image: "https://img.freepik.com/free-photo/man-checking-time-his-watch_329181-19661.jpg?t=st=1756568057~exp=1756571657~hmac=8c6eb62797a4f0db81fc233627ba7ee648fbf7437af08abcca0ba3fb7bb107bb&w=1480",
    description:
      "Implementamos um modelo de gerenciamento de resultados, que permite que profissionais sejam capazes de fazer gestão da rotina e de resolver problemas no dia-a-dia, garantindo estabilização dos processos para competitividade do negócio.",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Gestão de conhecimento",
    image: "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?t=st=1756568210~exp=1756571810~hmac=e3ba77b5700db90cc2961767109d9c5fe8663e97e59c1aa7d82244b0bdc86b2d&w=1480",
    description:
      "Transferimos conhecimento em gestão, capacitando a equipe dos nossos clientes em ferramentas e soluções como Lean, Gerenciamento da Rotina no Dia-a-Dia, Gemba Walk, Seis Sigma, Gestão do Tempo, Orçamento Base Zero, entre outras.",
  },
  {
    id: 4,
    icon: Target,
    title: "Desdobramento de metas",
    image: "https://img.freepik.com/free-photo/high-angle-dart-bull-s-eye_23-2148443750.jpg?t=st=1756568382~exp=1756571982~hmac=1baa9314b2f30197f391da3e44d5a93477bf19b787683f6b015c66912ac21519&w=1480",
    description:
      "Com base nas necessidades do negócio, realizamos o processo de desdobramento de metas, sendo fundamental para que as empresas tenham foco e que as soluções estejam alinhadas com os grandes desafios definidos pela alta administração.",
  },
  {
    id: 5,
    icon: RefreshCcw,
    title: "Melhoria contínua",
    image: "https://img.freepik.com/free-photo/high-angle-male-coworkers-analyzing-graph-work_23-2148908844.jpg?t=st=1756568449~exp=1756572049~hmac=3dfe0172a7dc7b9c08a1ab343e23e3cf448350fb167340b89306114e8d3aaf5d&w=1480",
    description:
      "Com uso baseado na metodologia PDCA atuamos na busca de resultados superiores, através da redução de perdas e com uso de metodologias de soluções de problemas como MASP e Seis Sigma.",
  },
  {
    id: 6,
    icon: Search,
    title: "Diagnóstico operacional",
    image: "https://img.freepik.com/free-photo/people-working-laptop-meeting_53876-64855.jpg?t=st=1756568444~exp=1756572044~hmac=e1c3646d03765dd96fcec6e2c2f48bda0bb5ccd8fa6c510304913017cbaa6aba&w=1480",
    description:
      "Realizamos um estudo detalhado dos processos da organização, identificando perdas ocultas, gargalos e oportunidades de melhoria. A partir de análises estruturadas, fornecemos um panorama claro da situação atual e direcionamos planos de ação que permitem elevar a eficiência, reduzir custos e aumentar a produtividade.",
  },
  {
    id: 7,
    icon: GraduationCap,
    title: "Educação e treinamento",
    image: "https://img.freepik.com/free-photo/medium-shot-people-chatting-table_23-2149304763.jpg?t=st=1756568591~exp=1756572191~hmac=7c6fbb78aaa1624f73f674ca99292d4da769659fa58f2a4279e0cd9f51ef5c2f&w=1480",
    description:
      "Desenvolvemos programas de capacitação e treinamentos práticos para potencializar a performance da equipe, promovendo aprendizado contínuo e aplicado.",
  },
  {
    id: 8,
    icon: Timer,
    title: "Método SMED",
    image: "https://img.freepik.com/free-photo/business-coworkers-shaking-hands-meeting-office-focus-is-businessman_637285-7009.jpg?t=st=1756568698~exp=1756572298~hmac=362f2298d5bc1e6f8ba28f5612bbee85642f01b88a8262418abbf51a3bd48126&w=1480",
    description:
      "O SMED (Troca rápida de ferramentas) é uma metodologia que tem como foco a redução significativa do tempo de setup, permitindo maior flexibilidade e velocidade produtiva. Com sua aplicação, a empresa consegue reduzir paradas de máquina, aumentar a disponibilidade de equipamentos e atender demandas de forma mais ágil e competitiva.",
  },
];

const Servicos = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <div className="services-container">
      <div className="services-content">
        {/* Left Side - Services Info and Cards */}
        <div className="services-left">
          {/* Title and Description */}
          <div className="services-header">
            <h1 className="services-title">
              Nossos serviços
            </h1>
            <p className="services-description">
              Conheça as soluções que desenvolvemos para impulsionar a eficiência, fortalecer a gestão e gerar resultados sustentáveis, apoiando sua empresa na conquista de metas estratégicas e no alcance de maior competitividade no mercado.
            </p>
          </div>

          {/* Service Cards Grid - 4x2 */}
          <div className="services-grid">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              const isSelected = selectedService.id === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`service-card ${isSelected ? 'service-card-selected' : ''}`}
                  style={{
                    backgroundColor: isSelected ? "#c89d2d" : "white",
                    color: isSelected ? "white" : "#0a2342",
                  }}
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

        {/* Right Side - Large Display Card */}
        <div className="display-card">
          {/* Image */}
          <div className="display-card-image">
            <img
              src={selectedService.image || "/placeholder.svg"}
              alt={selectedService.title}
              className="display-image"
            />
          </div>

          {/* Content */}
          <div className="display-card-content">
            <h2 className="display-card-title">
              {selectedService.title}
            </h2>
            <p className="display-card-description">
              {selectedService.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
