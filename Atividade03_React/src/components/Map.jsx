function Map(){
    const nomes = ['Ana', 'Adrielle', 'Lusca', 'Luiz', 'Paulo', 'Maria']

    return (
        <ul>{nomes.map((nome)=>(<li>{nome}</li>))}</ul>
    )
}

export default Map