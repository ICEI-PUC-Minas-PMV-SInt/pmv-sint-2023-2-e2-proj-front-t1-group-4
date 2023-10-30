import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <header className="header">
      <a href="/">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
      </a>
      <nav>
        <ul className="header-links">
          <li><a href="/">Home</a></li>
          <li><a href="/perfil">Perfil</a></li>
          <li><a href="/campanhas-de-doacao">Campanhas de Doação</a></li>
          <li><a href="/cadastre-se">Cadastre-se</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;