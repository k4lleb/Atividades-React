import './Style.css'

function Estilo(props){
    return props.Estilos ? <h1 className="mudarCor">Coxinha</h1> : <h1>Pastel</h1>
}

export default Estilo