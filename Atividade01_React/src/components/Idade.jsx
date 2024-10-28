function Idade(props) {
    if (props.numero >= 18) {
        return (
            <h2>Você é adulto</h2>
        )
    } else {
        return (
            <h2>Você é menor de idade</h2>
        )
    }
}

export default Idade