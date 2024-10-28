function Nota(props) {
    if (props.nota >= 90) {
        return <h2>Excelente</h2>
    }else if(props.nota >= 70 && 89) {
        return <h2>Bom</h2>
    }else{
        return <h2>Precisa melhorar</h2>
    }
}
export default Nota
