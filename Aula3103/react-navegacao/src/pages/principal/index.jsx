import { Link } from 'react-router-dom'
import './principal.css'


export default function Principal(){
    return(
        <div className="container">
            <header>
                <h1> Feira de Profissões </h1>
                <nav>
                    <ul>
                        <li> 
                            <Link to='/'>Home</Link> 
                        </li>
                        <li> 
                            <Link to='/sobre'>Sobre</Link> 
                        </li>
                        <li> 
                            <Link to='/galeriadefotos'>Galeria de Fotos</Link> 
                        </li>
                        <li> 
                            <Link to='/maisdetalhes'>+Detalhes</Link> 
                        </li>
                    </ul>
                </nav>
            </header>

            <section className='banner'>
                <img src="https://microbiotec.bio/wp-content/uploads/2025/10/a96fc159-2bd8-4773-a146-f0e40f53738c-1024x683.png" alt="Imagem principal"/>
                <div className="texto-banner">
                    <h2>Bem vindo á feira de profissões dos sonhos, dos alunos do Sesi</h2>
                    <p>Conheça o sonho da Aluna Gaby - Med Vet!</p>
                </div>
            </section>
            <section className='cards'>
                <div>
                    <h3>Medicina Veterinária - porte pequenos e clínica</h3>
                    <p> Animais de pequeno porte e atendimento em clínicas hospitalares.</p>
                </div>
                <div>
                    <h3>Medicina Veterinária - porte grande</h3>
                    <p> Animais de grande porte e atendimento em fazendas e centros de zoonose.</p>
                </div>
            </section>

            <footer>
                <p>2026 - Todos os direitos reservados - Feira de Profissões</p>
            </footer>
        </div>
    )
}