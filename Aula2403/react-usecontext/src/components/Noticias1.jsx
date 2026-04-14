import { useContext } from "react";
import { ContextoTema } from "../contextos/temaContexto.jsx";

export default function Noticias() {
    const { tema } = useContext(ContextoTema);

    const noticias = [
        {
            titulo: "Tecnologia em alta",
            descricao: "A inteligência artificial está crescendo rapidamente.",
            imagem: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/12/bigstock-Omni-Channel-Technology-Of-Onl-336037885.jpg"
        },
        {
            titulo: "Clima em alerta",
            descricao: "Temperaturas globais continuam subindo.",
            imagem: "https://agropos.com.br/wp-content/uploads/2021/03/Imagem-2023-12-04T135419.450.png"
        },
        {
            titulo: "Enem 2026",
            descricao: "O Enem 2026 vem se aproximando e novos conteúdos vem se alterando.",
            imagem: "https://ufla.br/dcom/wp-content/uploads/2015/05/enem-logo.jpg"
        }
    ];

    return (
        <section className={`noticias-${tema}`}>
            <h2>Últimas Notícias</h2>

            <div className="container-cards">
                {noticias.map((n, i) => (
                    <div key={i} className={`card-${tema}`}>
                        <img src={n.imagem} alt={n.titulo} />
                        <h3>{n.titulo}</h3>
                        <p>{n.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}