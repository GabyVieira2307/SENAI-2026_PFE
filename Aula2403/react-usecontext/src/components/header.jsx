// import { useContext } from "react";
// import { ContextoTema } from "../contextos/temaContexto.jsx";

// export default function Header() {
//     const { tema, mudarTema } = useContext(ContextoTema);

//     return (
//         <header className={`header-${tema}`}>
//             <h1>Site de Notícias</h1>

//             <button onClick={mudarTema}>
//                 Mudar para tema {tema === "light" ? "escuro" : "claro"}
//             </button>
//         </header>
//     );
// }

export default function Header({ alternarTema, temaEscuro }) {
  return (
    <header>
      <button onClick={alternarTema}>
        {temaEscuro ? "Claro" : "Escuro"}
      </button>
    </header>
  );
}