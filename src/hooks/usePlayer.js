import { useState, useCallback } from 'react';
import { STAGE_WIDTH } from '../gameHelpers';

import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: { x: 0, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
    });

    const updatePlayerPosition = ({ x, y, collided }) =>{
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.position.x += x), y: (prev.position.y)},
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

    return [player, updatePlayerPosition, resetPlayer];
}