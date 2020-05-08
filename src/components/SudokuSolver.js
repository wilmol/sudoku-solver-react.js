import React, { useState } from 'react';
import { initialBoard, solve } from './Solver';
import Board from './Board';

const SudokuSolver = () => {
  const [board, setBoard] = useState(initialBoard);

  const solveOnClick = () => {
    console.log('Solving...');
    solve(board, setBoard).then((b) => console.log(b ? 'Solved.' : 'Unsolveable.'));
  };

  const resetOnClick = () => {
    console.log('Resetting...');
    setBoard(initialBoard);
    console.log('Reset.');
  };

  return (
    <div>
      <Board board={board} />
      <button onClick={solveOnClick}>Solve</button>
      <button onClick={resetOnClick}>Reset</button>
    </div>
  );
};

export default SudokuSolver;
