const alunos = [
    { id: 0, nome: 'Gaby', nota: 10, fotodeperfil: 'https://jpimg.com.br/uploads/2024/12/7-racas-de-gato-com-filhotes-muito-fofos.jpg'},
    { id: 1, nome: 'Maria', nota: 9, fotodeperfil: 'https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg62b8a4beb04115.61748365.jpg%3FlastEdited%3D1656267972&w=600&h=600&f=webp'},
    { id: 2, nome: 'Sanches', nota: 9, fotodeperfil: 'https://selecoes.ig.com.br/media/_versions/2024/08/gatos_widelg.jpg'},
    { id: 3, nome: 'Ellefer', nota: 5, fotodeperfil: 'https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg62f9609baf6762.22401277.jpg%3FlastEdited%3D1660510365&w=400&h=400&f=webp'},
    { id: 4, nome: 'Lucas', nota: 3, fotodeperfil: 'https://cdn.pixabay.com/photo/2023/09/14/13/08/ai-generated-8252966_1280.jpg'}
]
export default function ListaAlunos({ titulo }) {
    const lista = alunos.filter(aluno => aluno.nota >= 6)
    const ListaAlunos = lista.map((aluno) => {
        return (
            <li key={aluno.id} style={{ textAlign: 'center' }}>
                
                <img src={aluno.fotodeperfil} alt={aluno.nome} />

                <h3>{aluno.nome} - Nota: {aluno.nota}</h3>
            </li>
        )
    })
    return(
        <>
            <h1 style={{ textAlign: 'center' }}>{titulo}</h1>

            <ul>
                {ListaAlunos}
            </ul>
        </>
    )
}