import React, { useState } from 'react';
import { solve } from './Solver';
import Board from './Board';
import { firstPuzzle, randomPuzzle } from './Puzzle';
import Button from './Button';

let initialBoard = firstPuzzle();

const copy = (obj) => JSON.parse(JSON.stringify(obj));

const SudokuSolver = () => {
  const [board, setBoard] = useState(copy(initialBoard));
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  return (
    <div>
      <Board board={board} />
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
            setBoard(copy(initialBoard));
            console.log('Reset board.');
          }}
          disabled={buttonsDisabled}
        />
        <Button
          text="Random"
          onClick={() => {
            console.log('Randomising board...');
            initialBoard = randomPuzzle();
            setBoard(copy(initialBoard));
            console.log('Randomised board.');
          }}
          disabled={buttonsDisabled}
        />
      </div>
    </div>
  );
};

export default SudokuSolver;
