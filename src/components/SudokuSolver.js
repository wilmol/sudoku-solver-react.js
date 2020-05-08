import React, { useState } from 'react';
import { solve } from './Solver';
import Board from './Board';
import { firstPuzzle, randomPuzzle } from './Puzzle';

let initialBoard = firstPuzzle();

const copy = (obj) => JSON.parse(JSON.stringify(obj));

const SudokuSolver = () => {
  const [board, setBoard] = useState(copy(initialBoard));

  return (
    <div>
      <Board board={board} />
      <button
        onClick={() => {
          console.log('Solving board...');
          solve(board, setBoard).then((b) =>
            console.log(b ? 'Solved board.' : 'Unsolveable board.')
          );
        }}
      >
        Solve
      </button>
      <button
        onClick={() => {
          console.log('Resetting board...');
          setBoard(copy(initialBoard));
          console.log('Reset board.');
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          console.log('Randomising board...');
          initialBoard = randomPuzzle();
          setBoard(copy(initialBoard));
          console.log('Randomised board.');
        }}
      >
        Random Puzzle
      </button>
    </div>
  );
};

export default SudokuSolver;
