export default function MeuAvatar({titulo, texto, nome, idade, fotodeperfil, estilomusical, disciplinaquemaisgosta, profissaodefuturo}){
    return(
        <>
        <h1>{titulo}</h1>
        <h2>{texto}</h2>
        <h3>Nome: {nome}</h3>
        <h3>Idade: {idade}</h3>
        <img src={fotodeperfil} alt="Foto de perfil"/>
        <p>
            <span>{estilomusical}</span><br/>
            <span>{disciplinaquemaisgosta}</span><br/>
            <span>{profissaodefuturo}</span>
        </p>
        </>
    )
}