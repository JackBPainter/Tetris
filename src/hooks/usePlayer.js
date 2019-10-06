import { useState, useCallback } from 'react';
import { STAGE_WIDTH } from '../gameHelpers';

import { TETROMINOS, randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false,
    });

    const rotate = (tetro, direction) => {
        /* make rows become columns */
        const rotatedTetro = tetro.map((_, index) =>
            tetro.map(col => col[index])
        );
        /* Reverse each row to get a rotated Tetro (Tetrominos) */
        if (direction > 0) return rotatedTetro.map(row => row.reverse());
        return rotatedTetro.reverse();
    }

    const playerRotate = (stage, direction) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction);
        setPlayer(clonedPlayer);
    }

    const updatePlayerPosition = ({ x, y, collided }) => {
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.position.x += x), y: (prev.position.y += y)},
            collided
        }))
    };

    const resetPlayer = useCallback(() => {
        setPlayer({
            position: { x: STAGE_WIDTH / 2 - 2, y: 0},
            tetromino: randomTetromino().shape,
            collided: false
        })
    }, []);

    return [player, updatePlayerPosition, resetPlayer, playerRotate];
}