import './App.css'
import Autenticado from './components/Autenticador'
import Desconto from './components/Desconto'
import Estudante from './components/Estudante'
import Idade from './components/Idade'
import Logado from './components/Logado'
import Nivel from './components/Nivel'
import Nome from './components/Nome'
import Nota from './components/Nota'
import Online from './components/Online'
import Saudacao from './components/Saudacao'

function App() {
  

  return (
    <>
      <Saudacao/>
      <Nome Nome = 'Jaja'/>
      <Autenticado autenticador = {true} />
      <Idade numero = '18'/>
      <Estudante Estudante = {false} />
      <Nota nota = '60'/>
      <Desconto temDesconto = {false}/>
      <Online online = {false}/>
      <Nivel nivel = "avançado"/>
      <Logado logado = {true}/>
    </>
  )
}

export default App
