import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className="logo" />
      </Link>
      <nav>
        <ul className="header-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/doar">Doar</Link></li>
          <li><Link to="/campanhas-de-doacao">Campanhas de Doação</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/cadastre-se">Cadastre-se</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
