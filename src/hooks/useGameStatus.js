import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const points = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
        /* See if we have any score */
        if (rowsCleared > 0) {
            /* Original Tetris score calculation */
            setScore(prevState => prevState + points[rowsCleared - 1] * (level + 1));
            setRows(prevState => prevState + rowsCleared);
        }
    }, [points, level, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];
}