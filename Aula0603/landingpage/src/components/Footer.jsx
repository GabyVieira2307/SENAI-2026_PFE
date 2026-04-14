

export default function Footer(){
    return(
        <p>
            <script>
                const data_atual = new Date();
                document.write(data_atual.getFulllYear())
            </script>
            Academia Fofitness. Todos os seus direitos reservados.
        </p>
    )
}