import React, { useState } from 'react';

function Tarefa(){
    const [tarefas, setTarefas] = useState([
        { id: 1, tarefa: "Atividades React" },
        { id: 2, tarefa: "Atividades Banco de dados" },
        { id: 3, tarefa: "DEMODAY" }
      ]);
    

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
      };
    return(
        <>
        <table border={1}>
            <tr>
                <th>tarefas</th>
                <th>ação</th>
            </tr>
            {tarefas.map((tarefa) => (
                <tr key={tarefa.id}>
                    <td>
                        {tarefa.tarefa}
                    </td>
                    <td>
                        <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
                    </td>
                </tr>
            ))}
        </table>
        </>
    )
}
export default Tarefa