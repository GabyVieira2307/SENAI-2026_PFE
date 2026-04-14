const estudantes = [
    { id: 1, nome: 'Gaby', idade: 17, ra: 495611},
    { id: 2, nome: 'Maria', idade: 17, ra: 21057},
    { id: 3, nome: 'Sanches', idade: 17, ra: 978412}
]

export default function ListaMap ({titulo}){
    const listaEstudantes = estudantes.map((estudante) => {
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>{estudante.ra}</p>
        </li>
    })
    return(
        <>
        <h3>{titulo}</h3>
        <ul>
            {listaEstudantes}
        </ul>
        </>
    
    )
}