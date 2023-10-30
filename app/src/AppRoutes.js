// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PostagemCampanha from './components/PostagemCampanha';
import Home from './components/Home';
import PaginaAlimentos from './components/PaginaAlimentos';

function AppRoutes() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/postagem-campanha" element={<PostagemCampanha />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
      <Route path="/campanhas-de-doacao" element={<PaginaAlimentos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRoutes;
