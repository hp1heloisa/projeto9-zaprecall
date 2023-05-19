import { useState } from 'react'
import Topo from './components/Topo';
import FlashCards from './components/FlashCards';
import Resultado from './components/Resultado';
import styled from 'styled-components';
import certo from './assets/icone_certo.png';
import quase from './assets/icone_quase.png';
import erro from './assets/icone_erro.png';



export default function App() {

  const listResultado = [erro,quase,certo];

  const cards = [
    { title: 'Pergunta 1', question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { title: 'Pergunta 2', question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { title: 'Pergunta 3', question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { title: 'Pergunta 4', question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { title: 'Pergunta 5', question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { title: 'Pergunta 6', question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { title: 'Pergunta 7', question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { title: 'Pergunta 8', question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];
  let [respondido, setRespondido] = useState(0);
  const [estado, setEstado] = useState([4,4,4,4,4,4,4,4]);
  let [resultado, setResultado] = useState([]);
  let [tela, setTela] = useState(false);

  return (
    <Geral respondido={respondido} cards={cards.length}>
      <Topo tela={tela} setTela={setTela} />
      <FlashCards cards = {cards} respondido = {respondido} listResultado={listResultado} setResultado={setResultado}
      setRespondido = {setRespondido} estado={estado} setEstado={setEstado} resultado={resultado} tela={tela} />
      <Resultado cards = {cards} respondido = {respondido} resultado={resultado} listResultado={listResultado} tela={tela} />
    </Geral>
  )
}

const Geral = styled.div`
  padding-top: 42px;
  background-color: #FB6B6B;
  padding-bottom: ${(props) => (props.respondido==props.cards) ? '217px' : '116px'};
`;

