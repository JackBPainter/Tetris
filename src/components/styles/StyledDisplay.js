import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 20px;
    border: 4px solid #333;
    margin 0 0 20px 0;
    width: 100%;
    min-height: 30px;
    border-radius: 20px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: Pixel, sans-serif;
    font-size: 1rem;
`;