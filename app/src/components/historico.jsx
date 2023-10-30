import '../styles/historico.css'
import campanha1 from '../assets/campanhas/logos/fomezero.jpg'
import campanha2 from '../assets/campanhas/logos/WhatsApp-Image-2022-09-13-at-13.05.21-768x768.jpeg'
import campanha3 from '../assets/campanhas/logos/natalsemfome.png'
import campanhalogo1 from '../assets/campanhas/logos/dailhes.jpg'
import campanhalogo2 from '../assets/campanhas/logos/carnavalfome.jpg'
import campanhalogo3 from '../assets/campanhas/logos/contrfome.jpg'

export const Campaign = () => {
  return (

    <div className='historico-card'>
      <div className='campanha-box'>
        <div className='campanha-titulo'>
          <h2>Campanhas Engajadas</h2>
        </div>
        <div className='campanha-feed'>
          <figure className='banner-box'>
            <img src={campanhalogo1} alt="" />
          </figure>

          <div className='campanha-descrição'>
            <p>Foi lançada nesta quarta-feira a CF (Campanha da Fraternidade) 2023, com o tema “Fraternidade e Fome”
              e o lema bíblico, extraído do livro de Mateus 14,16, “Dai-lhes vós mesmos de comer!”.</p>
          </div>
        </div>

        <div className='campanha-feed'>
          <figure className='banner-box'>
            <img src={campanhalogo2} alt="" />
          </figure>

          <div className='campanha-descrição'>
            <p>A Prefeitura de Salvador e a entidade Ação da Cidadania Contra a Fome, a Miséria e Pela Vida lançaram hoje (14)
              a campanha Carnaval sem Fome, em solenidade no Palácio Thomé de Souza. Com o slogan “Com fome não se brinca”</p>
          </div>
        </div>

        <div className='campanha-feed'>
          <figure className='banner-box'>
            <img src={campanhalogo3} alt="" />
          </figure>

          <div className='campanha-descrição'>
            <p> Queremos iniciar um novo grande pacto contra a fome. Um movimento de todos. Essa coalização é
              uma aliança de pessoas e coletivos que decidiram agir na urgência de levar comida para a nossa população.</p>
          </div>
        </div>
      </div>

      <div className='barra'>

      </div>

      <div className='historico-box'>
        <div className='historico-titulo'>
          <h2>Histórico</h2>
        </div>
        <div className='historico'>

          <div className='historico-feed'>
            <div className='campanha-logo'>
              <img src={campanha2} alt="" />
            </div>
            <div className='historico-descrição'>
            <div> Contra a fome e sede</div>
            </div>
          </div>

          <div className='historico-feed'>
            <div className='campanha-logo'>
              <img src={campanha1} alt="" />
            </div>
            <div className='historico-descrição'>
            <div> Fome zero</div>
            </div>
          </div>


          <div className='historico-feed'>
            <div className='campanha-logo'>
              <img src={campanha3} alt=""/>
            </div>
            <div className='historico-descrição'>
            <div> Natal sem fome</div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}