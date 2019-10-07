import React, { useState } from 'react';
import { createStage, checkCollision } from '../gameHelpers';

/* Styled Components*/
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

/* Hooks */
import { useStage } from '../hooks/useStage';
import { usePlayer } from '../hooks/usePlayer';
import { useInterval } from '../hooks/useInterval';
import { useGameStatus } from '../hooks/useGameStatus';

/* Components */
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
        rowsCleared
    );

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
        setSpeed(1000);
        setScore(0);
        setLevel(0);
        setRows(0);
    }

    const drop = () => {
        /* +1 level when player clears 10 rows */
        if (rows > (level + 1) * 10) {
            setLevel(prevState => prevState + 1);
            /* Increase drop speed based on current level */
            setSpeed(1000 / (level + 1) + 200);
        }

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

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setSpeed(1000 / (level + 1) + 200);
            }
        }    
    }

    const dropPlayer = () => {
        setSpeed(null);
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
            /* Down Key */
            } else if (keyCode === 40) {
                dropPlayer();
            /* Shift Key (Rotate Clockwise) */
            } else if (keyCode === 16) {
                playerRotate(stage, 1);
            /* Up Key (Rotate Anti-Clockwise) */
            } else if (keyCode === 38) {
                playerRotate(stage, -1);
            }
        }
    }

    useInterval(() => {
        drop()
    }, speed)
    
    return (
        <StyledTetrisWrapper 
            role="button" 
            tabIndex="0" 
            onKeyDown={e => move(e)} 
            onKeyUp={keyUp}
        >
            <StyledTetris>
            <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                    <div>
                        <Display text={`Score: ${score}`} />
                        <Display text={`Rows: ${rows}`} />
                        <Display text={`Level: ${level}`} />
                    </div>
                    )}
                <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;