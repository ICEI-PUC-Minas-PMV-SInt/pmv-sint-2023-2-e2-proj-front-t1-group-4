import '../styles/sidebar.css'
import perfilIcon from '../assets/icons/perfil-ícone.png'
import chatIcon from '../assets/icons/chat-ícone.png'
import campanhaIcon from '../assets/icons/campanha-ícone.png'
import { useNavigate } from 'react-router-dom';




export const Sidebar = () => {
  const navigate = useNavigate();

  function handleConversasClick() {
    navigate('/chat');
  }
  function handlePerfilClick() {
    navigate('/perfil');
  }
  function handleCampanhasClick() {
    navigate('/campanhas-de-doacao');
  }
    return (
        
        <aside className="sidebar">
  <section className="icon-container">
    <button className="icon-button" onClick={handlePerfilClick}>
      <img src={perfilIcon} alt="profile-icon" />
    </button>
    <h2>Perfil</h2>
  </section>

  <section className="icon-container">
  <button className="icon-button" onClick={handleConversasClick}>
    <img src={chatIcon} alt="chat-icon" />
  </button>
  <h2>Conversas</h2>
</section>


  <section className="icon-container">
    <button className="icon-button" onClick={handleCampanhasClick}>
      <img src={campanhaIcon} alt="campanha-icon" />
    </button>
    <h2>Campanhas</h2>
  </section>
</aside>


    )
}