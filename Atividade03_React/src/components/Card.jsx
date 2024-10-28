import './Card.css'

function Card(props){
    return (
        <div className="Children">
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}

export default Card