export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[0].length; x += 1) {
            /* Check that we are on a Tetromino cell */
            if (player.tetromino[y][x] !== 0) {
                if (
                /* Check that our move is within the STAGE_HEIGHT (y) */
                /* Make sure the Tetromino doesn't go below the game area */
                !stage[y + player.position.y + moveY] ||
                /* Check that our move is within the STAGE_WIDTH (x) */
                !stage[y + player.position.y + moveY][x + player.position.x + moveX] ||
                /* Check that the cell we are moving too isn't 'clear' */
                stage[y + player.position.y + moveY][x + player.position.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
};