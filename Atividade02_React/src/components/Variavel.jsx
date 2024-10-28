function Variavel(props) {
    if (props.bom === true) {
        return (
            <h2>Bom dia</h2>
        )
    }else{
        return(
            <h2>Boa noite</h2>
        )
    }
}

export default Variavel