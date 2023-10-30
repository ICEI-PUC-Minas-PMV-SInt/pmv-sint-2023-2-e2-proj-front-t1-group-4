import React from 'react';
import styles from './Quadro.module.css';

function Quadro(props) {
  return (
    <div className={styles.quadro}>
      <div className={styles.imagemContainer}>
        <img className={styles.imagem} src={props.imagem} alt="Imagem do Quadro" />
      </div>
      <div className={styles.texto}>
        <p>{props.texto}</p>
      </div>
    </div>
  );
}

export default Quadro;
