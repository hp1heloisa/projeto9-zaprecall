import raio from '../assets/logo.png';
import styled from 'styled-components';

export default function Topo({tela,setTela}) {

    function comecar(){
        setTela(true);
    }

    if (tela) {
        return(
            <SCTopo>
                <img src={raio} alt='raio' />
                <span>ZapRecall</span>
            </SCTopo>
        )
    } else{
        return(
            <SCTelaInicio>
                <img src={raio} alt='raio' />
                <div>ZapRecall</div>
                <div onClick={comecar}>Iniciar Recall!</div>
            </SCTelaInicio>
        )

    }
}


const SCTopo = styled.div`
    margin-bottom: 51px;
    gap: 20px;
    display: flex;
    justify-content: center;
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    width: 100%;
    img {
        width: 52px;
        height: 60px;
    }
`;

const SCTelaInicio = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 136px;
        height: 161px;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
    }
    div:nth-child(2) {
        font-family: 'Righteous';
        font-size: 36px;
        line-height: 45px;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        margin-bottom: 30px;
        margin-top: 13px;
        width: 257px;
        height: 59px;
    }
    div:nth-child(3){
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-size: 18px;
        line-height: 22px;
        color: #D70900;
    }
`