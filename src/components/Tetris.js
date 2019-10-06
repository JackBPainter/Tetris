import React, { useState } from 'react';
import { createStage, checkCollision } from '../gameHelpers';

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

    const [player, updatePlayerPosition, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player, resetPlayer);

    const movePlayer = (direction) => {
        if (!checkCollision(player, stage, { x: direction, y: 0})) {
            updatePlayerPosition({ x: direction, y: 0 });
        }
    }

    const startGame = () => {
        /* Reset */
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if(!checkCollision(player, stage, { x: 0, y: 1})) {
            updatePlayerPosition({ x: 0, y: 1, collided: false })
        } else {
            if (player.position.y < 1) {
                console.log("Game Over!!!");
                setGameOver(true);
                setSpeed(null);
            }
            updatePlayerPosition({ x: 0, y: 0, collided: true });
        }
    }

    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            /* Left Key */
            if (keyCode === 37) {
                movePlayer(-1);
            /* Right Key */
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            }
        }
    }

    
    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
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
                <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;