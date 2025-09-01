import React, { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Earth, Book } from "lucide-react";
import './styles/Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Número da empresa (sem espaços, traços ou parênteses)
    const phoneNumber = "5511994439172"; 

    // Mensagem formatada
    const textMessage = `*Novo contato pelo site*%0A
Eu, *${formData.nome}*, da empresa *${formData.empresa}* e email *${formData.email}* 
desejo entrar em contato com a Fábrica Escondida para o assunto: *${formData.assunto}*.%0A
Mensagem: ${formData.mensagem}`;

    // URL do WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${textMessage}`;

    // Redireciona para o WhatsApp
    window.open(url, "_blank");
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="header">
        <h1>Entre em contato</h1>
        <p>Queremos escutar você. Contate-nos agora mesmo!</p>
      </div>

      {/* Form */}
      <div className="form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="nome" placeholder="Nome" className="form-input" onChange={handleChange} />
            <input type="text" name="empresa" placeholder="Empresa" className="form-input" onChange={handleChange} />
          </div>
          <div className="form-row">
            <input type="tel" name="telefone" placeholder="Telefone" className="form-input" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" className="form-input" onChange={handleChange} />
          </div>
          <input type="text" name="assunto" placeholder="Assunto" className="form-input" onChange={handleChange} />
          <textarea name="mensagem" placeholder="Mensagem" rows={5} className="form-textarea" onChange={handleChange} />
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
