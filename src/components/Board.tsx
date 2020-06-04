import React, { useState } from 'react';
import Cell from './Cell';

interface BoardProps {
  board: { value: number; initiallySet: boolean }[][];
  setBoard: React.Dispatch<React.SetStateAction<{ value: number; initiallySet: boolean }[][]>>;
  cellsDisabled: boolean;
}

const Board: React.FC<BoardProps> = ({ board, setBoard, cellsDisabled }) => {
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
                  board={board}
                  setBoard={setBoard}
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
