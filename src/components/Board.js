import React from 'react';
import Cell from './Cell';

const Board = ({ board }) => {
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
