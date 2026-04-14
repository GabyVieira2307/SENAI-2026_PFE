import imgMusculacao from '../assets/img/musculacao.jpg';
import imgCardio from '../assets/img/corrida.jpg';
import imgYoga from '../assets/img/yoga.jpg';

export default function Main(){
    return(
        <main>
            <section id="home">
                <h2>Tranforme seu corpo com a <span> Fofitness </span></h2>
                <p>Academia perfeita para quem quer ficar no Shape.</p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Sobre Nós</h2>
                <p>Somos uma academia focada em perda de peso e construção de shapes incríveis, no estilo Mr. Olimpya.
                    Com 2dias de expêriencia no mercado, esperamos oferecer o melhor para nossos clientes. Quer ser um BodyBuild? Nós
                    podemos te ajudar!
                </p>
            </section>

            <section id="modalidades">
                <h2>Nossas Modalidades</h2>
                <div>
                    <h3>Musculação</h3>
                    <img src={imgMusculacao} alt=""></img>
                </div>
                <div>
                    <h3>Cardio</h3>
                    <img src={imgCardio} alt=""></img>
                </div>
                <div>
                    <h3>Yoga</h3>
                    <img src={imgYoga} alt=""></img>
                </div>
            </section>

            <section id="planos">
                <h2>Planos e Preços</h2>
                <div className="tabela-planos">
                    <div className="plano">
                        <h3>Básico</h3>
                        <p>R$ 79,90/mês</p>
                        <ul>
                            <il>Acesso a musculação</il>
                            <il>Aulas coletivas</il>
                            <il>Hórario livre</il>
                        </ul>
                    </div>
                    <div className="plano">
                        <h3>Premium</h3>
                        <p>R$ 129,90/mês</p>
                        <ul>
                            <il>Acesso total </il>
                            <il>Personal trainer</il>
                            <il>Yoga e Funcional </il>
                        </ul>
                    </div>
                    <div className="plano">
                        <h3>VIP</h3>
                        <p>R$ 199,90/mês</p>
                        <ul>
                            <il>Personal exclusivo</il>
                            <il>Nutricionista</il>
                            <il>Café na entrada</il>
                            <il>CSorriso da(o) atendente na entrada</il>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="depoimentos">
                <h2>O que nossos alunos estão comentando sobre nós?</h2>
                <div>
                    <p>"Academia incrível, um dia e já me sinto maromba."</p>
                    <span>Théo</span>
                </div>
                 <div>
                    <p>"Não gostei porque não tem ar condicionado."</p>
                    <span>Geovanna</span>
                </div>
            </section>

            <section id="contato">
                <h2>Entre em contato</h2>
                <form action="">
                    <input type="text" placeholder="Seu nome"/>
                    <input type="text" placeholder="Seu e-mail"/>
                    <textarea name="" id="" placeholder="Sua mensagem"></textarea>
                    <button>Enviar</button>
                    
                </form>
            </section>
        </main>
    )
}