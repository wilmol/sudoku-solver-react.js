import React, { useState } from 'react';
import { isValidMove, solve } from './Solver';
import Board from './Board';
import { emptyPuzzle, firstPuzzle, randomPuzzle } from './Puzzle';
import Button from './Button';
import { copy } from './Commons';

let unsolvedBoard = firstPuzzle();

const SudokuSolver = () => {
  const [board, setBoard] = useState(copy(unsolvedBoard));
  const [interactionsDisabled, setButtonsDisabled] = useState(false);

  const updateBoard = (newBoard) => {
    // update unsolvedBoard for the reset button
    unsolvedBoard = newBoard;
    setBoard(copy(unsolvedBoard));
  };

  // called when user inputs a cells value
  const updateCell = (row, col, val) => {
    val = !val ? 0 : parseInt(val);
    if (isNaN(val) || val > 9 || val < 0) {
      console.log(`(invalid value) board[${row}][${col}] = ${val}`);
      return;
    }
    if (val > 0 && !isValidMove(board, row, col, val)) {
      console.log(`(invalidates puzzle) board[${row}][${col}] = ${val}`);
      return;
    }
    console.log(`board[${row}][${col}] = ${val}`);
    const boardCopy = copy(board);
    boardCopy[row][col].value = parseInt(val);
    boardCopy[row][col].initiallySet = true;
    updateBoard(boardCopy);
  };

  return (
    <div>
      <Board board={board} updateCell={updateCell} cellsDisabled={interactionsDisabled} />
      <div className="ButtonDiv">
        <Button
          text="Solve"
          onClick={() => {
            console.log('Solving board...');
            setButtonsDisabled(true);
            solve(board, setBoard).then((b) => {
              console.log(b ? 'Solved board.' : 'Unsolveable board.');
              setButtonsDisabled(false);
            });
          }}
          disabled={interactionsDisabled}
        />
        <Button
          text="Reset"
          onClick={() => {
            console.log('Resetting board...');
            setBoard(copy(unsolvedBoard));
            console.log('Reset board.');
          }}
          disabled={interactionsDisabled}
        />
        <Button
          text="Clear"
          onClick={() => {
            console.log('Clearing board...');
            updateBoard(emptyPuzzle());
            console.log('Cleared board.');
          }}
          disabled={interactionsDisabled}
        />
        <Button
          text="Random"
          onClick={() => {
            console.log('Randomising board...');
            updateBoard(randomPuzzle());
            console.log('Randomised board.');
          }}
          disabled={interactionsDisabled}
        />
      </div>
    </div>
  );
};

export default SudokuSolver;
