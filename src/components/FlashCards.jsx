import virar from '../assets/seta_virar.png';
import styled from "styled-components";


export default function FlashCards({cards, setEstado, estado, setRespondido,respondido,listResultado,setResultado,resultado,tela}) {

    function atualizaEstado(i){
        estado[i]++;
        setEstado([...estado]);
    }

    function CriaFlash({i,question,answer}) {
        if (estado[i] == 4){
            return(
                <>
                    <span data-test="flashcard-text">Pergunta {i+1}</span> 
                    <ion-icon name="play-outline" onClick={()=> atualizaEstado(i)} data-test="play-btn"></ion-icon>
                </>
            )
        }else if (estado[i]==5){
            return(
                <>
                    <span data-test="flashcard-text">{question}</span>
                    <img src={virar} alt="seta_virar" onClick={()=> atualizaEstado(i)} data-test="turn-btn"/>
                </>
            )
        } else if (estado[i] == 6){
            return(
                <>
                     <span data-test="flashcard-text">{answer}</span>
                            <SCResultado>
                                <div onClick={()=> {
                                     estado[i] = 0;
                                     setEstado([...estado]);
                                     setRespondido(respondido+1);
                                     setResultado([...resultado,estado[i]]);
                                }} data-test="no-btn">Não lembrei</div>
                                <div onClick={()=> {
                                     estado[i] = 1;
                                     setEstado([...estado]);
                                     setRespondido(respondido+1);
                                     setResultado([...resultado,estado[i]]);
                                }} data-test="partial-btn">Quase não lembrei</div>
                                <div onClick={()=> {
                                     estado[i] = 2;
                                     setEstado([...estado]);
                                     setRespondido(respondido+1);
                                     setResultado([...resultado,estado[i]]);
                                }} data-test="zap-btn">Zap!</div>
                            </SCResultado>
                </>
            )
        } else{
            return(
                <>
                    <span data-test="flashcard-text">Pergunta {i+1}</span> 
                    <img src={listResultado[estado[i]]} alt={listResultado[estado[i]]} data-test="no-icon zap-icon partial-icon"/>
                </>
            )
        }
    }

    if (tela) {
        return(
            <SCEnvolveCard>
                {cards.map((elemento,i)=>{ 
                        return (
                            <SCFlashCard estado={estado[i]} data-test="flashcard" key={i}>
                                <CriaFlash i={i} question={elemento.question} answer={elemento.answer}/>
                            </SCFlashCard>
                            )
                
                })}
            </SCEnvolveCard>
        )
    }
}

const SCEnvolveCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
`;

const SCFlashCard = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: ${(props) => (props.estado==5 || props.estado==6) ? '150px' : '65px'};   
    background: ${(props) => (props.estado==5 || props.estado==6) ? '#FFFFD5' : '#FFFFFF'};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: ${(props) => (props.estado==5 || props.estado==6) ? 'column' : 'row'};
    align-items:  ${(props) => (props.estado==5 || props.estado==6) ? '' : 'center'};
    color:  ${ (props) => {
        if (props.estado == 0){
            return '#FF3030';
        } else if (props.estado == 1){
            return '#FF922E';
        } else if (props.estado==2){
            return '#2FBE34';
        }
        else {
            return '#333333'
        }
    }};
    padding-right: ${(props) => (props.estado==5 || props.estado==6) ? '' : '15px'};
    padding-top: ${(props) => (props.estado==5 || props.estado==6) ? '18px' : ''};
    span{
        font-family: 'Recursive';
        font-size: ${(props) => (props.estado==5 || props.estado==6) ? '18px' : '16px'};
        line-height: ${(props) => (props.estado==5 || props.estado==6) ? '22px' : '19px'};
        font-weight: ${(props) => (props.estado==5 || props.estado==6) ? '400' : '700'};
        text-decoration: ${ (props) => (props.estado <=2) ? 'line-through' : 'none'};
        margin-left: 15px;
    }
    ion-icon{
        width: 20px;
        height: 23px;
    }
    img{
        width: ${(props) => (props.estado==5) ? '30px' : '23px'};
        height: ${(props) => (props.estado==5) ? '20px' : '23px'};
        margin-bottom: ${(props) => (props.estado==5) ? '6px' : ''};
        margin-left: ${(props) => (props.estado==5) ? '254px' : ''};
    }
`;

const SCResultado = styled.div`
    display: flex;
    justify-content:center;
    gap: 8px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-bottom: 10px;
    text-align: center;
    div{
        width: 85.17px;
        height: 37.17px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div:nth-child(1){
        background-color: #FF3030;
    }
    div:nth-child(2){
        background-color: #FF922E;
    }
    div:nth-child(3){
        background-color: #2FBE34;
    }
`