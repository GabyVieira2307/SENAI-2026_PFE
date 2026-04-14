import './maisdetalhes.css'
import { Link } from 'react-router-dom'
export default function Maisdetalhes(){
    return(
        <section className="detalhes-container">
            <h2> Um pouco mais sobre a Medicina Veterinária </h2>
            <p>A Medicina Veterinária é crucial para a saúde pública, animal e ambiental, atuando sob o conceito de "Saúde Única". Médicos-veterinários previnem zoonoses (doenças transmitidas a humanos), garantem a segurança alimentar, cuidam do bem-estar animal e atuam na preservação ambiental, sendo essenciais para a sociedade e economia.</p>
            <p>Saúde Pública e Zoonoses: Atuação direta na prevenção, controle e diagnóstico de doenças que afetam animais e humanos, como raiva, leishmaniose, esporotricose e gripe aviária, prevenindo pandemias.</p>
            <p>Segurança e Inspeção Alimentar: Fiscalização rigorosa de alimentos de origem animal (carne, leite, ovos) em indústrias e frigoríficos, garantindo que cheguem seguros ao consumidor final.</p>
            <p>Saúde e Bem-Estar Animal: Cuidados clínicos, cirúrgicos e preventivos (vacinas, manejo) para animais domésticos, de produção e silvestres, visando a qualidade de vida e evitando dor e estresse.</p>
            <p>Saúde Ambiental e Ecossistema: Monitoramento de pragas, vetores e desequilíbrios ambientais, atuando na preservação da vida selvagem e sustentabilidade.</p>
            <p>Apoio à Economia: Fundamental para a produtividade agropecuária, garantindo a saúde dos rebanhos e a eficiência na produção de alimentos.</p>

            <h2> Motivações para você que quer cursar Med Vet</h2>
            <p>“Nem todos os heróis usam capa, alguns usam jaleco e carregam amor pelos animais.”</p>
            <p>“Você não está apenas escolhendo uma carreira, está escolhendo fazer a diferença.”</p>
            <p>“O justo cuida bem dos seus animais.” — Provérbios 12:10</p>
            <p>“Posso todas as coisas naquele que me fortalece.” — Filipenses 4:13</p>

            <div className="botao-container">
                <Link to="/" className="botao-voltar">Voltar para Home</Link>
            </div>
        </section>
    )
}