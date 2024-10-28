import './App.css'
import Card from './components/Card'
import Estilo from './components/Estilo'
import Evisivel from './components/Evisivel'
import Filho from './components/Filho'
import Imagem from './components/Imagem'
import Imagens from './components/Imagens'
import Map from './components/Map'
import Multiplos from './components/Multiplo'
import Tabela from './components/Tabela'
import Tarefa from './components/Tarefa'

function App() {


  return (
    <>
    <Map/>
    <Filho/>
    <Evisivel isVisible={true}/>
    <Tabela/>
    <Imagem/>
    <Estilo Estilos={true}/>
    <Card titulo='Pequeno' subtitulo="VM"/>
    <Tarefa/>
    <Multiplos/>
    <Imagens/>
    </>
  )
}

export default App
