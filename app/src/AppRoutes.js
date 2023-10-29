import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostagemCampanha from './components/PostagemCampanha';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/postagem-campanha" element={<PostagemCampanha />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
