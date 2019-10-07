import styled from 'styled-components';

import bgImg from '../../image/bg.png';

export const StyledTetrisWrapper = styled.div`
    height: 100vh;   
    width: 100vw;
    background: url(${bgImg});
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    padding: 50px;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`