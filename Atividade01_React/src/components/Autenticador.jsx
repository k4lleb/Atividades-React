function Autenticado(props){
    return props.autenticador === true ? <h1>Bem-vindo, usuário!</h1> : null
 }
 export default Autenticado