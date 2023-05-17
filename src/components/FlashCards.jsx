import styled from "styled-components";

export default function FlashCards({cards, setEstado, estado}) {

    return(
        <SCEnvolveCard>
            {cards.map((elemento,i)=>{ 
                if (estado[i] == 0){
                    return (
                        <SCFlashCard>
                            <span>Pergunta {i+1}</span> 
                            <ion-icon name="play-outline" onClick={()=>{
                                estado[i]++;
                                setEstado([...estado]);
                            }}></ion-icon>
                        </SCFlashCard>
                        )
                } else if(estado[i] == 1) {
                    return (
                        <SCFlashCard>
                            oi
                        </SCFlashCard>
                    )
                } else if (estado[i] == 2){

                } else{

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
