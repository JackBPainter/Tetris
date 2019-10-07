import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color} />
)
/* React memo prevents re-rendering the full stage of arrays 
(240 cells) every time there is a change. The memo only re-renders
the cells that change for the tetromino and it's rotations */
export default React.memo(Cell);