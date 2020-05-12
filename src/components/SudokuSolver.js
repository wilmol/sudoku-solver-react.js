import React, { useState } from 'react';
import { solve } from './Solver';
import Board from './Board';
import { emptyPuzzle, firstPuzzle, randomPuzzle } from './Puzzle';
import Button from './Button';
import { copy } from './Commons';

let unsolvedBoard = firstPuzzle();

const SudokuSolver = () => {
  const [board, setBoard] = useState(copy(unsolvedBoard));
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const updateBoard = (newBoard) => {
    // update unsolvedBoard for the reset button
    unsolvedBoard = newBoard;
    setBoard(copy(unsolvedBoard));
  };

  const updateCell = (row, col, val) => {
    // used when user inputs a cells value
    const boardCopy = copy(board);
    boardCopy[row][col].value = val;
    boardCopy[row][col].initiallySet = true;
    updateBoard(boardCopy);
  };

  return (
    <div>
      <Board board={board} updateCell={updateCell} />
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
          disabled={buttonsDisabled}
        />
        <Button
          text="Reset"
          onClick={() => {
            console.log('Resetting board...');
            setBoard(copy(unsolvedBoard));
            console.log('Reset board.');
          }}
          disabled={buttonsDisabled}
        />
        <Button
          text="Random"
          onClick={() => {
            console.log('Randomising board...');
            updateBoard(randomPuzzle());
            console.log('Randomised board.');
          }}
          disabled={buttonsDisabled}
        />
      </div>
      <div className="ButtonDiv">
        <Button
          text="Clear"
          onClick={() => {
            console.log('Clearing board...');
            updateBoard(emptyPuzzle());
            console.log('Cleared board.');
          }}
          disabled={buttonsDisabled}
        />
      </div>
    </div>
  );
};

export default SudokuSolver;
