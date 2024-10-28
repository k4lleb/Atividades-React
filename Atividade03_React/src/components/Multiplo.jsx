function Multiplos(){
    const Fazeres = [
        {id:1, fazer:"Banco de dados"},{id:2, fazer:"telas DEMODAY"},{id:3, fazer:"Terapia"}
    ]
    return(
        <>
            <h1>Titulo</h1>
            <table border={1}>
                <tr>
                    <th>tarefa</th>
                </tr>
                {Fazeres.map((fazer) => (
                <tr key={fazer.id}>
                    <td>{fazer.fazer}</td>
                </tr>
                ))}
            </table>

            <p>O que vale é o que importa</p>
        </>
    )
}

export default Multiplos