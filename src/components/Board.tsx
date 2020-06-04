import React, { useState } from 'react';
import Cell from './Cell';

export type BoardState = {
  value: number;
  initiallySet: boolean;
}[][];

type BoardProps = {
  board: BoardState;
  setBoard: React.Dispatch<React.SetStateAction<BoardState>>;
  cellsDisabled: boolean;
};

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
