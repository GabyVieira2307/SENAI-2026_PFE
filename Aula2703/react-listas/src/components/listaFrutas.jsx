const frutas =['Morango', 'Lichia', 'Goiaba', 'Abacaxi', 'Manga'];

export default function ListaFrutas({titulo}){
    return(
        <>
        <h1>{titulo}</h1>
        <ul>
            <li>
                <h3>Morango</h3>
            </li>
             <li>
                <h3>Lichia</h3>
            </li>
             <li>
                <h3>Goiaba</h3>
            </li>
             <li>
                <h3>Abacaxi</h3>
            </li>
             <li>
                <h3>Manga</h3>
            </li>
        </ul>
        </>
    )
}