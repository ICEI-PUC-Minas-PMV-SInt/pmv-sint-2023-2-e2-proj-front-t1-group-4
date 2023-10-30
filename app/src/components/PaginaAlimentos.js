import React from 'react';
import '../styles/PaginaAlimentos.css'; 
import LogoBanana from '../assets/icons/icons8-banana-96.png';
import LogoAbacaxi from '../assets/icons/icons8-abacaxi-96.png';
import LogoMaca from '../assets/icons/icons8-maca.png';
import LogoMelancia from '../assets/icons/icons8-melancia-96.png';

function PaginaAlimentos() {
    return (
        <div>
          <div className="square">
            <div className="conteudo-quadrado">
              <div className="quadrado-menor">
                <img className="logo" src={LogoBanana} alt="Logotipo de Banana" />
              </div>
              <div className="texto-ao-lado">
                <p>
                  Na AlimentaAção, acreditamos que cada pessoa merece acesso a
                  alimentos nutritivos e saudáveis. Somos uma organização sem fins
                  lucrativos dedicada a combater a fome e o desperdício de
                  alimentos. Nossa missão é simples, mas poderosa: coletar alimentos
                  excedentes e direcioná-los para aqueles que mais precisam.
                </p>
              </div>
            </div>
            <button className="botao-no-canto">Ver mais</button>
          </div>
          <div className="square">
            <div className="conteudo-quadrado">
              <div className="quadrado-menor">
              <img className="logo" src={LogoAbacaxi} alt="Logotipo de Abacaxi" />

              </div>
              <div className="texto-ao-lado">
                <p>
                  Na ONG Semeando Esperança, nossa missão é clara: combater a fome e
                  nutrir a esperança. Trabalhamos incansavelmente para coletar
                  alimentos e distribuí-los a famílias carentes em nossa comunidade.
                  Acreditamos que cada pessoa merece uma refeição saudável e digna.
                  Além disso, promovemos programas de educação alimentar e
                  agricultura sustentável para criar um futuro mais brilhante.
                  Junte-se a nós para cultivar esperança e alimentar corações.
                </p>
              </div>
            </div>
            <button className="botao-no-canto">Ver mais</button>
          </div>
    
          <div className="square">
            <div className="conteudo-quadrado">
              <div className="quadrado-menor">
              <img className="logo" src={LogoMaca} alt="Logotipo de Maçã" />
              </div>
              <div className="texto-ao-lado">
                <p>
                  Na ONG Alimentos para Todos, nosso compromisso é claro: acabar com
                  a fome e o desperdício de alimentos. Trabalhamos em parceria com
                  supermercados e restaurantes locais para coletar alimentos
                  excedentes e entregá-los a organizações de caridade que atendem
                  pessoas necessitadas. Nossa visão é criar uma comunidade onde
                  ninguém passe fome, ao mesmo tempo em que reduzimos o desperdício
                  de alimentos. Junte-se a nós nessa jornada para nutrir comunidades
                  e proteger nosso planeta.
                </p>
              </div>
            </div>
            <button className="botao-no-canto">Ver mais</button>
          </div>
    
          <div className="square">
            <div className="conteudo-quadrado">
              <div className="quadrado-menor">
              <img className="logo" src={LogoMelancia} alt="Logotipo de Melancia" />
              </div>
              <div className="texto-ao-lado">
                <p>
                  A ONG Comida Solidária está empenhada em alimentar não apenas os
                  corpos, mas também os espíritos. Nossa equipe de voluntários
                  trabalha incansavelmente para coletar alimentos e preparar
                  refeições nutritivas para pessoas em situação de rua e comunidades
                  carentes. Acreditamos que a solidariedade e o alimento podem curar
                  feridas e criar laços. Além disso, oferecemos apoio emocional e
                  oportunidades de educação para aqueles que atendemos.
                </p>
              </div>
            </div>
            <button className="botao-no-canto">Ver mais</button>
          </div>
        </div>
      );
    }
    

export default PaginaAlimentos;
