import { Campaign} from './historico'
import { Profile } from './perfil'
import { Sidebar } from './sidebar'
import '../styles/PerfilApp.css';

function PerfilApp() {

  return (
    <div>

      
      <main className='main-container'>
        
        <aside className='sidebar-container'>
          <Sidebar />
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

export default PerfilApp
