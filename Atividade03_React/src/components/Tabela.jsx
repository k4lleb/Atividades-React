function Tabela(prosp) {
    const objetos = [{ id: 1, nome: 'Adriana', idade: '25' },
    { id: 2, nome: 'Jaja', idade: '39' }
    ]
    return (
        <>
            <table>
                <colgroup span="2"></colgroup>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>idade</th>
                </tr>
                {objetos.map((objeto) => (
                    <tr>
                        <td>{objeto.id}</td>
                        <td>{objeto.nome}</td>
                        <td>{objeto.idade}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default Tabela