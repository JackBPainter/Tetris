export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0'},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '50, 230, 212',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: '235, 64, 52',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: '248, 255, 54',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '58, 235, 52',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '51, 51, 232',
    },
    Z: {
        shape: [
            [0, 'Z', 'Z'],
            ['Z', 'Z', 0],
            [0, 0, 0],
        ],
        color: '230, 50, 149',
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IJLOTZ';
    const randTetro = tetrominos[Math
        .floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetro];
}