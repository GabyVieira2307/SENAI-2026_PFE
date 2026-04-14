import { useState } from "react";
import { Link } from "react-router-dom";
import imagemEstacao from '../assets/estacao.jpg';
import "../App.css";

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    return(
        <section className="login-container">
            <div className="login-card">
                <div className="login-imagem">
                 <img src={imagemEstacao} alt="Estação meteorológica" />
                </div>
                <div className="login-formulario">
                    <h2 className="titulo">Cadastro de Usuário</h2>
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
                        <label htmlFor="confSenha">Confirmar Senha</label>
                        <input
                          type="password"
                          id="confSenha"
                          value={confirmaSenha}
                          onChange={(e) => setConfirmaSenha(e.target.value)}
                        />
                        <Link to= '/dashboard'className="botao">Cadastrar</Link>
                    </form>
                </div>
            </div>
        </section>
    )
}
