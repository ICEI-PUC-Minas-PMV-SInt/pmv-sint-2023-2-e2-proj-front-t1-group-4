import '../styles/perfil.css';
import userAvatar from '../assets/imgs/john.jpg'

export const Profile = () => {
    return (
        <main className="perfil-container">

            <figure className="avatar-box">
                <img src={userAvatar} alt="" />
            </figure>

            <section className="info-card">
                <div className='user-nome'>
                    <h2>John Doe</h2>
                </div>
                <div className='user-tag'>
                    <p>@johndoe12</p>
                </div>
        
                    <div className='descrição-box'>
                        <h3>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vestibulum ut faucibus metus
                            annet bolis.</h3>
                    </div>
            </section>

            <section className='configurações-card'>

                    <div className='user-dados'>
                    <h1>Nome: </h1>
                    <h2>John Smith Doe</h2>
                    </div>

                    <div className='user-dados'>
                    <h1>Idade: </h1>
                    <h2>34</h2>
                    </div>

                    <div className='user-dados'>
                    <h1>Estado: </h1>
                    <h2>São Paulo</h2>
                    </div>

                    <div className='user-dados'>
                    <h1>Email: </h1>
                    <h2>johndoe@emai.com</h2>
                    </div>
                {/* <div className='user-dados'>
                    <h1>Nome:</h1>
                    <h1>Idade:</h1>
                    <h1>Estado:</h1>
                    <h1>Email:</h1>
                </div>
                <div className='user-dados'>
                    <h2>John Smith Doe</h2>
                    <h2>32</h2>
                    <h2>São h2aulo</h2>
                    <h2>johndoe@email.com</h2>
                </div> */}

            </section>

        </main>
    )
}