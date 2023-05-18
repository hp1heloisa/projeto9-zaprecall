import styled from "styled-components";
import virar from '../assets/seta_virar.png';


export default function FlashCards({cards, setEstado, estado, setRespondido,respondido,listResultado,setResultado,resultado}) {

    // const listResultado = [erro,quase,certo];

    function atualizaEstado(i){
        estado[i]++;
        setEstado([...estado]);
    }

    return(
        <SCEnvolveCard>
            {cards.map((elemento,i)=>{ 
                if (estado[i] == 4){
                    return (
                        <SCFlashCard estado={estado[i]} data-test="flashcard">
                            <span data-test="flashcard-text">Pergunta {i+1}</span> 
                            <ion-icon name="play-outline" onClick={()=> atualizaEstado(i)} data-test="play-btn"></ion-icon>
                        </SCFlashCard>
                        )
                } else if(estado[i] == 5) {
                    return (
                        <SCFlashTeste data-test="flashcard">
                            <span data-test="flashcard-text">{elemento.question}</span>
                            <img src={virar} alt="seta_virar" onClick={()=> atualizaEstado(i)} data-test="turn-btn"/>
                        </SCFlashTeste>
                    )
                } else if (estado[i] == 6){
                    return (
                    <SCFlashTeste data-test="flashcard">
                        <span data-test="flashcard-text">{elemento.answer}</span>
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
                    </SCFlashTeste>)
                } else{
                    return(
                        <SCFlashCard estado={estado[i]} data-test="flashcard"> 
                            <span data-test="flashcard-text">Pergunta {i+1}</span> 
                            <img src={listResultado[estado[i]]} alt={listResultado[estado[i]]} data-test="no-icon zap-icon partial-icon"/>
                        </SCFlashCard>
                    )
                }
        
            })}
        </SCEnvolveCard>
    )
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
    height: 65px;   
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding-left: 15px;
    padding-right: 15px;
    span{
        font-family: 'Recursive';
        font-size: 16px;
        line-height: 19px;
        font-weight: 700;
        text-decoration: ${ (props) => (props.estado <=2) ? 'line-through' : 'none'};
    }
    ion-icon{
        width: 20px;
        height: 23px;
    }
`;



const SCFlashTeste = styled.div`
    width: 300px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding-top: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-left: 15px;
    }
    img{
        width: 30px;
        height: 20px;
        margin-bottom: 6px;
        margin-left: 254px;
    }
`
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