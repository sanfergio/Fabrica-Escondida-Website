import React from "react";
import './styles/Clientes.css';

const clientLogos = [
  { name: "BRF", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/BRF_Global.svg/1200px-BRF_Global.svg.png" },
  { name: "Scala", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/1200px-Scala-full-color.svg.png" },
  { name: "Agrivalle", img: "https://agrivalle.com.br/wp-content/uploads/2022/12/logo-agrivalle-laranja-1024x347.png" },
  { name: "Renova", img: "https://www.sertras.com/v3/wp-content/uploads/2019/04/Renova-500-x-240.png" },
  { name: "Gerdau", img: "https://logodownload.org/wp-content/uploads/2014/05/gerdau-logo-1-1.png" },
  { name: "Tecnored", img: "https://media.licdn.com/dms/image/v2/C4D0BAQFXvA5hK3B3Zw/company-logo_200_200/company-logo_200_200/0/1635508241873/tecnored_brasil_logo?e=2147483647&v=beta&t=04SNEDTzPTVSP8bAhkoSOVrcTkkuWqF8qb9zYa2Kq8I" },
  { name: "Paranapanema", img: "https://uploads.bpmoney.com.br/2023/12/Paranapanema-Divulgacao-1536x640.jpeg" },
  { name: "AcelorMittal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLCyxpsid9uAWxZtVGNbjOYLXCM-c8etyQw&s" },
  { name: "Cipalam", img: "https://spwacos.com.br/wp-content/uploads/2021/02/cipalam.png" },
  { name: "Alcoa", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Alcoa_logo_%282016%29.svg/1200px-Alcoa_logo_%282016%29.svg.png" },
  { name: "Novelis", img: "https://www.cms.adityabirla.com/uploads/novelis_1_4cdd0e5c8d.webp" },
  { name: "Zanaflex", img: "https://zanaflex.com.br/wp-content/uploads/2024/10/LOGO.png" },
  { name: "AmstedMaxion", img: "https://www.amstedmaxion.com.br/wp-content/uploads/2017/10/amm3d_300dpi.jpg" },
  { name: "Damapel", img: "https://damaprofissional.com.br/wp-content/uploads/2020/06/logo-Damapel-final.png" },
  { name: "Fundação Renova", img: "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/2031890/regular_466768bc8f37957247b78d2d226421bd.png" },
  { name: "NSK", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/NSK_Logo.svg/2560px-NSK_Logo.svg.png" },
  { name: "Actech", img: "https://media.licdn.com/dms/image/v2/D4D0BAQEGfUbJMDOQgw/company-logo_200_200/company-logo_200_200/0/1737988295742/actechbr_logo?e=2147483647&v=beta&t=5jUgscjtaSlIslwvY4RJLPjgOx5Yn1tl1qpQvY7__-w" },
  { name: "Kluber", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kl%C3%BCber_Lubrication_logo.svg/1200px-Kl%C3%BCber_Lubrication_logo.svg.png" },
  { name: "Fachada", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp2VGE5oh3G2M5XbBXwgTalLwClAYyWUmDW1n9w2jXjleKscv-" },
  { name: "Urbano Vitalino", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGYZLw_d0qi2SdtncDihzFQGRV50ClKwgsw&s" },
  { name: "Mais Brasil", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_7RTbcmiATf708iSnRPeR7MUXwlJAGMdZQ&s" },
];

const Clientes = () => {
  return (
    <div className="clients-container">
      {/* Client cards grid */}
      <div className="clients-grid">
        {clientLogos.map((client) => (
          <div key={client.name} className="client-card">
            <img
              src={client.img}
              alt={client.name}
              style={{ maxWidth: "100%", maxHeight: "60px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      {/* Title and description in lower right */}
      <div className="title-section">
        <h1 className="clients-title">
          Clientes
        </h1>
        <p className="clients-description">
          Atendemos empresas de diversos segmentos, ofereceredo soluções personalizadas e eficazes para cada setor, fortalecendo parcerias de longo prazo.
        </p>
      </div>
    </div>
  );
};

export default Clientes;
