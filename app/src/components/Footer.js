import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <p className="footer-title">CONEXÃO ALIMENTAR</p>
            <p className="footer-text">"Fazendo a diferença juntos, um prato de cada vez." ☘</p>
            <p className="footer-text">Em preparo... 🍳</p>
          </div>
          <div className="col-lg-3">
            <p className="footer-title">Links</p>
            <ul className="footer-links">
              <li><a href="/">Sobre nós</a></li>
              <li><a href="/">Como funciona</a></li>
              <li><a href="/">Páginas de Doação</a></li>
              <li><a href="/">Política de Privacidade</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <p className="footer-title">Contato</p>
            <ul className="footer-links">
              <li><a href="/">E-mail: exemplo@exemplo.com</a></li>
              <li><a href="/">Telefone: (123) 456-7890</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <p className="footer-title">Comunidade</p>
            <ul className="footer-links">
              <li>
                <a href="https://twitter.com/login?lang=pt">
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <i className="fa fa-youtube"></i> Youtube
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
