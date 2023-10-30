import styles from '../styles/Button.module.css';
import { useNavigate } from 'react-router-dom';

function Button(props) {
    const navigate = useNavigate();

    function handleCadastroClick() {
      navigate('/cadastre-se'); // Verifique se o caminho da rota está correto
    }
  
  return (
    <button className={`${styles.button} ${styles[props.customClass]}`} onClick={handleCadastroClick}>{props.text}</button>
  );
}

export default Button;
