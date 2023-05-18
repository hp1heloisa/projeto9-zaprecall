import { useState } from 'react'
import Topo from './components/Topo';
import FlashCards from './components/FlashCards';
import Resultado from './components/Resultado';
import styled from 'styled-components';

export default function App() {

  const [cards, setCards] = useState([
    { title: 'Pergunta 1', question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { title: 'Pergunta 2', question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { title: 'Pergunta 3', question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { title: 'Pergunta 4', question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { title: 'Pergunta 5', question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { title: 'Pergunta 6', question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { title: 'Pergunta 7', question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { title: 'Pergunta 8', question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]);
  let [acertos, setAcertos] = useState(0);
  const [estado, setEstado] = useState([0,0,0,0,0,0,0,0]);
  let [resultado, setResultado] = useState(-1);

  return (
    <Geral>
      <Topo />
      <FlashCards cards = {cards} acertos = {acertos} resultado={resultado} setResultado={setResultado}
      setAcertos = {setAcertos} estado={estado} setEstado={setEstado} />
      <Resultado cards = {cards} acertos = {acertos} />
    </Geral>
  )
}

const Geral = styled.div`
  padding-top: 42px;
  background-color: #FB6B6B;
  padding-bottom: 116px;
`;

