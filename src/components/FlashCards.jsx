import styled from "styled-components";
import virar from '../assets/seta_virar.png';
import certo from '../assets/icone_certo.png';
import quase from '../assets/icone_quase.png'
import erro from '../assets/icone_erro.png'


export default function FlashCards({cards, setEstado, estado}) {

    const listResultado = [erro,quase,certo];

    function atualizaEstado(i){
        estado[i]++;
        setEstado([...estado]);
    }

    return(
        <SCEnvolveCard>
            {cards.map((elemento,i)=>{ 
                if (estado[i] == 0){
                    return (
                        <SCFlashCard>
                            <span>Pergunta {i+1}</span> 
                            <ion-icon name="play-outline" onClick={()=> atualizaEstado(i)}></ion-icon>
                        </SCFlashCard>
                        )
                } else if(estado[i] == 1) {
                    return (
                        <SCFlashTeste>
                            <span>{elemento.question}</span>
                            <img src={virar} alt="seta_virar" onClick={()=> atualizaEstado(i)}/>
                        </SCFlashTeste>
                    )
                } else if (estado[i] == 2){
                    return (
                    <SCFlashTeste>
                        <span>{elemento.answer}</span>
                        <SCResultado>
                            <div onClick={()=> atualizaEstado(i)}>Não lembrei</div>
                            <div onClick={()=> atualizaEstado(i)}>Quase não lembrei</div>
                            <div onClick={()=> atualizaEstado(i)}>Zap!</div>
                        </SCResultado>
                    </SCFlashTeste>)
                } else{
                    return(
                        <SCFlashCard>
                            <span>Pergunta {i+1}</span> 
                            <ion-icon name="play-outline" onClick={()=> atualizaEstado(i)}></ion-icon>
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
    color: #333333;
    padding-left: 15px;
    padding-right: 15px;
    span{
        font-family: 'Recursive';
        font-size: 16px;
        line-height: 19px;
        font-weight: 700;
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