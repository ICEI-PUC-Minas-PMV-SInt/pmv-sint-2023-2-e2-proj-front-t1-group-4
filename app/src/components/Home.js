import React from 'react';
import Quadro from './Quadro';
import Button from './Button';
import styles from '../styles/Home.component.module.css';



function Home() {


  return (
    <div className={styles.formato}>
      <div className={styles.texto}>
        <h1>A sua sobra pode ser a esperança de outros!</h1>
      </div>
      <div className={styles.texto}>
        <h3>
          Conectando pessoas com disposição para ajudar o próximo, com
          instituições que fazem a diferença perto de você
        </h3>
      </div>
      <div className={styles.quadro}>
        <Quadro
          imagem="https://img.freepik.com/fotos-gratis/grande-conjunto-de-vegetais-isolados-em-um-fundo-branco_485709-44.jpg"
          texto="Por ano, o desperdício no país chega a 27 milhões de toneladas de alimentos, sendo que 60% deles vêm do consumo no dia a dia das famílias."
        />
        <Quadro
          imagem="https://cdn-icons-png.flaticon.com/512/4939/4939326.png"
          texto="Segundo o relatório, em 2022, 70,3 milhões de pessoas estavam em estado de insegurança alimentar moderada, que é quando possuem dificuldade para se alimentar no Brasil."
        />
        <Quadro
          imagem="https://impactosocial.esolidar.com/wp-content/uploads/2020/05/ONG-confiavel-como-transmitir-a-sua-mensagem.png"
          texto="As ONGs (Organizações Não-Governamentais) representam uma grande força econômica e de transformação social no Brasil, apesar do pouco reconhecimento."
        />
      </div>
      <div className={styles.margem}>
        <div className={styles.texto}>
          <h1>Cadastre-se e venha fazer a diferença!</h1>
        </div>
        <div className={styles.disposicao}>
        <Button
        customClass="larger"
        text="Seja um doador"
      />
<Button
  customClass="larger"
  text="Seja uma instituição parceira"
/>


</div>

      </div>
      <div>
        <div className={styles.texto}>
          <h3>Algumas instituições parceiras da plataforma</h3>
        </div>
        <div className={styles.display_imagens}>
          <div className={styles.imagemContainer}>
            <img
              src="https://www.gov.br/secretariageral/pt-br/consea/noticias/manifestacao-da-presidencia-do-consea-sobre-o-lancamento-do-plano-brasil-sem-fome/brasilsemfome.png"
              className={styles.imagem}
              alt="Instituição 1"
            />
          </div>
          <div className={styles.imagemContainer}>
            <img
              src="https://gife.org.br/wp/media/2021/05/logo-panela-cheia-salva.jpg"
              className={styles.imagem}
              alt="Instituição 2"
            />
          </div>
          <div className={styles.imagemContainer}>
            <img
              src="https://www.sodexobeneficios.com.br/data/files/D4/85/12/A6/7E3A381088E91938930BF9C2/xinstituto-stop-hunger-brasil.png.pagespeed.ic.UXHj3t-J-b.png"
              className={styles.imagem}
              alt="Instituição 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
