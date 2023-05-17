import raio from '../assets/logo.png';
import styled from 'styled-components';

export default function Topo() {
    return(
        <SCTopo>
            <img src={raio} alt='raio' />
            <span>ZapRecall</span>
        </SCTopo>
    )
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
    img {
        width: 52px;
        height: 60px;
    }
`;