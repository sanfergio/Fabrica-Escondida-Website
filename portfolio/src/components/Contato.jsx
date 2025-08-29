import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import './Contato.css';

const Contato = () => {
  return (
    <div className="contact-container">
      {/* Centered Header */}
      <div className="header-section">
        <h1 className="main-title">
          Entre em contato conosco
        </h1>
        <p className="header-description">
          Queremos escutar você. Contate-nos agora mesmo!
        </p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Contact Form */}
        <div className="form-section">
          <h2 className="section-title">
            Nos envie uma mensagem!
          </h2>
          <p className="form-description">
            Preencha o formulário abaixo, retornaremos o mais rápido possível.
          </p>

          <form className="contact-form">
            {/* Name and Company Row */}
            <div className="form-row">
              <div className="form-field">
                <input
                  type="text"
                  placeholder="Nome"
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="form-input"
                />
              </div>
            </div>

            {/* Phone and Email Row */}
            <div className="form-row">
              <div className="form-field">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="form-field-full">
              <input
                type="text"
                placeholder="Assunto"
                className="form-input"
              />
            </div>

            {/* Message */}
            <div className="form-field-full">
              <textarea
                placeholder="Mensagem"
                rows={6}
                className="form-textarea"
              />
            </div>

            {/* Send Button */}
            <div className="button-container">
              <button
                type="submit"
                className="send-button"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Other Ways */}
        <div className="info-section">
          <h2 className="section-title">
            Outras formas de contato
          </h2>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon-container">
                <MapPin className="contact-icon" />
              </div>
              <div className="contact-details">
                <h3 className="contact-label">
                  Endereço
                </h3>
                <p className="contact-text">
                  Calçada Antares, 256 - Alphaville
                  <br />
                  Santana de Parnaíba - SP, 06541-065
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <Mail className="contact-icon" />
              </div>
              <div className="contact-details">
                <h3 className="contact-label">
                  Email
                </h3>
                <p className="contact-text">contato@fabricaescondida.com.br</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-container">
                <Phone className="contact-icon" />
              </div>
              <div className="contact-details">
                <h3 className="contact-label">
                  Telefone
                </h3>
                <p className="contact-text">+55 (11) 99443-9172</p>
              </div>
            </div>
          </div>

          {/* Social Networks */}
          <div className="social-section">
            <h2 className="social-title">
              Nossas redes
            </h2>
            <div className="social-links">
              <a
                href="https://www.instagram.com/"
                className="social-link"
              >
                <Instagram className="social-icon" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="social-link"
              >
                <Facebook className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/f%C3%A1brica-escondida/?originalSubdomain=br"
                className="social-link"
              >
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;