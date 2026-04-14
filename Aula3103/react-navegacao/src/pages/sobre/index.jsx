import './sobre.css'
import { Link } from 'react-router-dom'
export default function Sobre(){
    return(
        <section className="container">
            <h2> Intuito da nossa feira: </h2>
            <p>O intuito de uma feira de profissões na escola é orientar estudantes (principalmente do Ensino Médio) na escolha de carreira, apresentando um panorama de cursos, universidades e o mercado de trabalho. Ela visa conectar alunos com profissionais, reduzir a ansiedade sobre o futuro, despertar vocações e incentivar a continuidade dos estudos.</p>
             <div className="botao-container">
                <Link to="/" className="botao-voltar">Voltar para Home</Link>
            </div>
        </section>
    )
}