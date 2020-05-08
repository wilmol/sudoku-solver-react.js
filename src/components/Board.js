import React from 'react';

const Board = ({ board }) => {
  return (
    <table border="1">
      <tbody>
        {board.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={`${i}-${j}`}>{cell === 0 ? '' : cell}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board;
