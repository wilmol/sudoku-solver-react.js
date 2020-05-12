import React, { useState } from 'react';
import Cell from './Cell';

const Board = ({ board, updateCell, cellsDisabled }) => {
  const [hover, setHover] = useState({ row: -1, col: -1 });

  return (
    <table className="Board">
      <tbody>
        {board.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((cell, j) => (
                <Cell
                  key={`${i}-${j}`}
                  row={i}
                  col={j}
                  value={cell.value}
                  initiallySet={cell.initiallySet}
                  hover={hover}
                  setHover={setHover}
                  updateCell={updateCell}
                  disabled={cellsDisabled}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board;
