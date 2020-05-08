import React from 'react';
import Cell from './Cell';

const Board = ({ board }) => {
  return (
    <table border="1">
      <tbody>
        {board.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((cell, j) => (
                <Cell key={`${i}-${j}`} value={cell} />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board;
