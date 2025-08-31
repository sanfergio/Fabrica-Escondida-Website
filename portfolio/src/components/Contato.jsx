import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Earth, Book } from "lucide-react";
import './styles/Contato.css';

const Contato = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="header">
        <h1>Entre em contato</h1>
        <p>Queremos escutar você. Contate-nos agora mesmo!</p>
      </div>

      {/* Form */}
      <div className="form-wrapper">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Nome" className="form-input" />
            <input type="text" placeholder="Empresa" className="form-input" />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Telefone" className="form-input" />
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <input type="text" placeholder="Assunto" className="form-input" />
          <textarea placeholder="Mensagem" rows={5} className="form-textarea" />
          <button type="submit" className="send-button">Enviar</button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-item">
          <Mail size={18} />
          <span>contato@fabricaescondida.com.br</span>
        </div>
        <div className="info-item">
          <Phone size={18} />
          <span>+55 (11) 99443-9172</span>
        </div>
        <div className="info-item">
          <Earth size={18} />
          <a href="https://www.fabricaescondida.com.br"><span>www.fabricaescondida.com.br</span></a>
        </div>
        <div className="info-item">
          <Book size={18} />
          <a href="https://ead.fabricaescondida.com.br"><span>ead.fabricaescondida.com.br</span></a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/company/f%C3%A1brica-escondida/?originalSubdomain=br" className="social-link"><Linkedin size={18} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contato;
