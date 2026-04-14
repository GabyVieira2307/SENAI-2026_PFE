import './App.css'
import logoSesi from './assets/img/logo-SESI-SP.svg';
import logoSenai from './assets/img/SENAI_logo.png';

function App() {
  return (
    <div className="container">
      <img src={logoSesi} alt = "" className='logo'></img>
      <img src={logoSenai} alt = "" className='logo'></img>
      <h1 className='titulo'>Login</h1>
      <span className='subtitulo'>para continuar</span>
      <label htmlFor="nome" className='label'>Nome</label>
      <input type='text' className='campo' id='nome' placeholder='Seu nome'></input>
      <label htmlFor="senha" className='label'>Senha</label>
      <input type='text' className='campo' id='senha' placeholder='*****'></input>
      <button className='botao'>Log in</button>
      <a href='#' className='link'> Esqueceu a senha? </a>
      <a href='#' className='link'> Cadastre-se! </a>
      
    </div>
  )
}

export default App
