import { useState } from "react";

export default function Aluno({titulo}){
    const [nome,setNome] = useState('Gaby');
    const [idade, setIdade] = useState (17);
    const [altura, setAltura] = useState (1.60);
    const [ra, setRA] = useState (4949494949);
    const [nota, setNota] = useState (10);

    return(
        <>
        <h1>{titulo}</h1>
        <h3>{nome}</h3>
        <h4>{idade}</h4>
        <h4>{ra}</h4>
        <h4>{nota}</h4>
        </>
    )
}