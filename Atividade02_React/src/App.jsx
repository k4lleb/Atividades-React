import './App.css'
import Botao from './components/Botao'
import Cabecalho from './components/Cabecalho'
import Div from './components/Div'
import Hello from './components/Hello'
import Imagem from './components/Imagem'
import Link from './components/Link'
import Lista from './components/Lista'
import Paragrafo from './components/Paragrafo'
import Titulo from './components/Titulo'
import Variavel from './components/Variavel'

function App() {

  return (
    <>
      <Hello/>
      <Paragrafo/>
      <Lista/>
      <Imagem/>
      <Botao/>
      <Link/>
      <Titulo/>
      <Variavel bom={false}/>
      <Div/>
      <Cabecalho/>
    </>
  )
}

export default App
