import React, { useState } from 'react';

/* Styled Components*/
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

/* Hooks */
import { useStage } from '../hooks/useStage';
import { usePlayer } from '../hooks/usePlayer';

/* Components */
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);


    return (
        <StyledTetrisWrapper>
            <StyledTetris>
            <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    )}
                <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;