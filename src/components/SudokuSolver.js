import React, { useState } from 'react';
import { isValidMove, solve } from './Solver';
import Board from './Board';
import { emptyPuzzle, firstPuzzle, randomPuzzle } from './Puzzle';
import Button from './Button';

const SudokuSolver = () => {
  const [board, setBoard] = useState(firstPuzzle());
  const [interactionsDisabled, setInteractionsDisabled] = useState(false);

  // called when user inputs a cells value
  const updateCell = (row, col, val) => {
    const dirtyVal = val;
    // convert to int as that is what solvers expect
    val = !val ? 0 : parseInt(val);

    // input validation
    if (isNaN(val) || val > 9 || val < 0) {
      console.log(`(invalid value) board[${row}][${col}] = ${dirtyVal}`);
      return;
    }
    if (val > 0 && !isValidMove(board, row, col, val)) {
      console.log(`(invalidates puzzle) board[${row}][${col}] = ${val}`);
      return;
    }

    console.log(`board[${row}][${col}] = ${val}`);
    // without copying the renders are delayed
    // TODO(wilmol) why is this?
    const boardCopy = [...board];
    boardCopy[row][col].value = parseInt(val);
    boardCopy[row][col].initiallySet = val > 0;
    setBoard(boardCopy);
  };

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
      row.map((col) => (col.initiallySet === true ? col : { value: 0, initiallySet: false }))
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
      <Board board={board} updateCell={updateCell} cellsDisabled={interactionsDisabled} />
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
