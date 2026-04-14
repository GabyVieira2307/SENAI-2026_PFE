const estudantes = [
    { id: 1, nome: 'Gaby', idade: 17, ra: 495611, disciplina: 'Língua Portuguesa'},
    { id: 2, nome: 'Maria', idade: 17, ra: 21057, disciplina: 'Língua Portuguesa'},
    { id: 3, nome: 'Sanches', idade: 17, ra: 97841, disciplina: 'Matemática'}
]

export default function ListaFilter ({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Língua Portuguesa')//aplica o filtro sobre a coleção
    const listaEstudantes = lista.map((estudante) => {//mapeando o resultado do filtro
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>{estudante.ra}</p>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            {listaEstudantes}
        </ul>
        </>
    
    )
}