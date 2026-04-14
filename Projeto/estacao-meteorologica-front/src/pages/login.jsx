import { useState } from "react";
import { Link } from "react-router-dom";
import imagemEstacao from '../assets/estacao.jpg';
import "../App.css";

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <section className="login-container">
            <div className="login-card">

                <div className="login-imagem">
                    <img src={imagemEstacao} alt="Estação meteorológica" />
                </div>

                <div className="login-formulario">
                    <h2 className="titulo">Login</h2>

                    <form>
                        <label htmlFor="usuario">Usuário</label>
                        <input
                          type="text"
                          id="usuario"
                          value={usuario}
                          onChange={(e) => setUsuario(e.target.value)}
                        />

                        <label htmlFor="senha">Senha</label>
                        <input
                          type="password"
                          id="senha"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                        <Link to='/dashboard' className="botao">Entrar</Link>
                    </form>
                    <Link to='/registro' >Não tem conta? Cadastre-se</Link>
                </div>

            </div>
        </section>
    )
}
