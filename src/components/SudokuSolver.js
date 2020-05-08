import React, { useState } from 'react';
import { solve } from './Solver';
import Board from './Board';

const decodePuzzle = (encodedPuzzle) => {
  return encodedPuzzle.match(/.{9}/g).map((rowString) =>
    rowString
      .split('')
      .map((cellString) => parseInt(cellString))
      .map((cellInt) => {
        // cell properties
        return {
          value: cellInt,
          initiallySet: cellInt !== 0,
        };
      })
  );
};

const SudokuSolver = () => {
  const encodedPuzzle =
    '530070000600195000098000060800060003400803001700020006060000280000419005000080079';

  const initialBoard = decodePuzzle(encodedPuzzle);
  const [board, setBoard] = useState(initialBoard);

  return (
    <div>
      <Board board={board} />
      <button
        onClick={() => {
          console.log('Solving...');
          solve(board, setBoard).then((b) => console.log(b ? 'Solved.' : 'Unsolveable.'));
        }}
      >
        Solve
      </button>
      <button
        onClick={() => {
          console.log('Resetting...');
          setBoard(initialBoard);
          console.log('Reset.');
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SudokuSolver;
