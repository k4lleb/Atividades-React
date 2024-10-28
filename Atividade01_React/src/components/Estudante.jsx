function Estudante(props){
    if(props.estudante === true){
        return(
            <h2>Você é um estudante</h2>
        )
    }else{
        return(
            <h2>Você não é um estudante</h2>
        )
    }
}

export default Estudante