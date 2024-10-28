function Nivel(props){
    return props.nivel === "iniciante" ? <h2>Bem-vindo, iniciante!</h2> : props.nivel === "intermediário" ? <h2>Você está progredindo!</h2> : props.nivel === "avançado" ? <h2>Parabéns, especialista!</h2> : null
}

export default Nivel