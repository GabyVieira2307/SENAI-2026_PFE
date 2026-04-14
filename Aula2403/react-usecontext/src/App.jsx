// import Header from './components/header.jsx'
// import Noticias from './components/Noticias1.jsx'
// import './estilos.css'
// import './App.css'

// function App() {

//   return (
//     <>
//     <Noticias />
//     </>
//   )
// }

// export default App

import { useState } from "react";
import Header from './components/header.jsx'
import Noticias from './components/Noticias1.jsx'
import './estilos.css'
import './App.css'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <div className={temaEscuro ? "dark" : "light"}>
      
      <Header alternarTema={() => setTemaEscuro(!temaEscuro)} temaEscuro={temaEscuro} />
      
      <Noticias />
      
    </div>
  )
}

export default App