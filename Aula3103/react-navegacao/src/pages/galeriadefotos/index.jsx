import './galeriadefotos.css'
import { Link } from 'react-router-dom'
export default function Galeriadefotos(){
    return(
        <section className="galeria-container">
            <h2> Fotos dos atendimentos </h2>
             <img src="https://blog.unyleya.edu.br/wp-content/uploads/2019/10/GettyImages-885571364-1.jpg" alt="Imagem galeriadefotos"/>
             <img src="https://jornal.unesp.br/wp-content/uploads/2022/08/abreveterinaria.jpg" alt="Imagem galeriadefotos"/>
             <img src="https://wordpress-cms-gc-prod-assets.quero.space/uploads/2024/04/vet-1.jpg" alt="Imagem galeriadefotos"/>
             <img src="https://www.unama.br/sites/unama.br/files/noticias/2018/shutterstock_675958786.jpg" alt="Imagem galeriadefotos"/>

               <div className="botao-container">
                <Link to="/" className="botao-voltar">Voltar para Home</Link>
            </div>
        </section>
    )
}