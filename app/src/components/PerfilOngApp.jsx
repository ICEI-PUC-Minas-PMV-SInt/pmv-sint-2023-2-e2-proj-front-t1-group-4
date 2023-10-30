import { Campaign} from './historicoOng'
import { Profile } from './perfilOng'
import { SidebarOng } from './sidebarOng';
import '../styles/PerfilApp.css';

function PerfilOngApp() {

  return (
    <div>

      
      <main className='main-container'>
        
        <aside className='sidebar-container'>
          <SidebarOng />
        </aside>

        <section className='perfil'>

          <div className='perfil-container'>
            <Profile />
          </div>
          <div className='historico-container'>
          <Campaign />
          </div>

        </section>

      </main>

    </div>
  )
}

export default PerfilOngApp
