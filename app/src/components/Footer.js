import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>E-mail: exemplo@exemplo.com</p>
        <p>Telefone: (123) 456-7890</p>
      </div>
      <div className="footer-links">
        <a href="/sobre-nos">Sobre Nós</a>
        <a href="/paginas-de-doacao">Páginas de Doação</a>
        <a href="/politica-de-privacidade">Política de Privacidade</a>
      </div>
      <div className="logo">
      <a href="/">
          <img src="/logo.png" alt="Logo da Marca" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
