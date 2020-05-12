import React, { useState } from 'react';
import { solve } from './Solver';
import Board from './Board';
import { emptyPuzzle, firstPuzzle, randomPuzzle } from './Puzzle';
import Button from './Button';

const SudokuSolver = () => {
  const [board, setBoard] = useState(firstPuzzle());
  const [interactionsDisabled, setInteractionsDisabled] = useState(false);

  const solveButton = () => {
    console.log('Solving board...');
    setInteractionsDisabled(true);
    solve(board, setBoard).then((b) => {
      console.log(b ? 'Solved board.' : 'Unsolveable board.');
      setInteractionsDisabled(false);
    });
  };

  const resetButton = () => {
    console.log('Resetting board...');
    const resetBoard = board.map((row) =>
      row.map((cell) => (cell.initiallySet ? cell : { value: 0, initiallySet: false }))
    );
    setBoard(resetBoard);
    console.log('Reset board.');
  };

  const clearButton = () => {
    console.log('Clearing board...');
    setBoard(emptyPuzzle());
    console.log('Cleared board.');
  };

  const randomButton = () => {
    console.log('Randomising board...');
    setBoard(randomPuzzle());
    console.log('Randomised board.');
  };

  return (
    <div>
      <Board board={board} setBoard={setBoard} cellsDisabled={interactionsDisabled} />
      <div className="ButtonDiv">
        <Button text="Solve" onClick={solveButton} disabled={interactionsDisabled} />
        <Button text="Reset" onClick={resetButton} disabled={interactionsDisabled} />
        <Button text="Clear" onClick={clearButton} disabled={interactionsDisabled} />
        <Button text="Random" onClick={randomButton} disabled={interactionsDisabled} />
      </div>
    </div>
  );
};

export default SudokuSolver;
