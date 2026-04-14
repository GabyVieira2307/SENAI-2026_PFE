import './App.css'
import Mensagem from './components/mensagem.jsx';
import PropsNomeado from './components/propsNomeado.jsx';
import MeuAvatar from './components/meuAvatar.jsx';
import imagem from './assets/img/gatinho.jpg';

function App() {
  return (
    <>
     {/* <Mensagem titulo='Aprendendo Props ou Properties ou ainda Propriedades' texto='Bem Vindo(a) ao mundo das Props ' nome=' Leo'/>
     <Mensagem titulo='Interclasse 2026' texto='Bem Vindo(a) ao interclasse ' nome=' Gaby'/> */}
     <MeuAvatar titulo='Sobre mim💜 ' texto='Me chamo ' nome=' Gaby ' idade={17} fotodeperfil={imagem} estilomusical=' Músicas católicas e sertanejo ' disciplinaquemaisgosta=' Português e Biologia ' profissaodefuturo=' Medicina Veterinária. '/>
    </>
     
  )
}

export default App
