import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PostagemCampanha from './components/PostagemCampanha';
import Home from './components/Home';
import PaginaAlimentos from './components/PaginaAlimentos';
import Login from './components/Login';
import PerfilApp from './components/PerfilApp';
import Chat from './components/Chat';
import Cadastro from './components/Cadastro';
import PerfilOngApp from './components/PerfilOngApp';

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
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/perfil" element={<PerfilApp />} />
      </Routes>
      <Routes>
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Routes>
        <Route path="/cadastre-se" element={<Cadastro />} />
      </Routes>
      <Routes>
        <Route path="/perfil-ong" element={<PerfilOngApp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRoutes;
