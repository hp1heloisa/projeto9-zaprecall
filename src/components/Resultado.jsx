import styled from "styled-components";
import boa from "../assets/party.png";
import ruim from "../assets/sad.png";


export default function Resultado({cards, respondido,resultado,listResultado}) {

    function formaFrase(){
        if (respondido==cards.length){
            console.log(resultado)
            if (resultado.includes(0)==false){
                return <div data-test="finish-text"> 
                            <span><img src={boa} alt={boa} /> Parabéns!</span>
                            <span>Você não esqueceu de nenhum flashcard!</span>
                        </div>
            } else {
                return <div data-test="finish-text"> 
                            <span><img src={ruim} alt={ruim} /> Putz...</span>
                            <span>Você não esqueceu de nenhum flashcard!</span>
                        </div>
            }
        }
    }

    return(
        <CSResultado respondido={respondido} cards={cards.length} data-test="footer">
            <div>{formaFrase()}</div>
            <div>
                <span>{respondido}/{cards.length} CONCLUÍDOS</span>
                <div>{resultado.map((i)=> <img src={listResultado[i]} alt={listResultado[i]} data-test="no-icon zap-icon partial-icon"/>)}</div>
            </div>
        </CSResultado>
    )
}

const CSResultado = styled.div`
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    height: ${(props) => (props.respondido==props.cards) ? '171px' : '70px'};
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    div:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items:center;
        gap: 14px;
        span:nth-child(1) {
            font-weight: 700;
        }
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        div{
            display: flex;
            flex-direction: row;
            gap: 5px;
        }
    }
`;