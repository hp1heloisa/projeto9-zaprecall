import styled from "styled-components";

export default function Resultado({cards, acertos}) {
    return(
        <CSResultado>
            <span>{acertos}/{cards.length} CONCLUÍDOS</span>
        </CSResultado>
    )
}

const CSResultado = styled.div`
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
`;