// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostagemCampanha from './components/PostagemCampanha';

function AppRoutes() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Routes>
        <Route path="/postagem-campanha" element={<PostagemCampanha />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
