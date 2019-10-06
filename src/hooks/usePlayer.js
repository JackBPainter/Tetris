import { useState } from 'react';

import { randTetro } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        position: { x: 0, y: 0 },
        tetromino: randTetro().shape,
        collided: false,
    });
    return [player];
}