import React, { useState } from 'react';
import { solve } from './Solver';
import Board from './Board';
import { firstPuzzle, randomPuzzle } from './Puzzle';
import Button from './Button';

let initialBoard = firstPuzzle();

const copy = (obj) => JSON.parse(JSON.stringify(obj));

const SudokuSolver = () => {
  const [board, setBoard] = useState(copy(initialBoard));

  return (
    <div>
      <Board board={board} />
      <div className="ButtonWrapper">
        <Button
          text="Solve"
          onClick={() => {
            console.log('Solving board...');
            solve(board, setBoard).then((b) =>
              console.log(b ? 'Solved board.' : 'Unsolveable board.')
            );
          }}
        />
        <Button
          text="Reset"
          onClick={() => {
            console.log('Resetting board...');
            setBoard(copy(initialBoard));
            console.log('Reset board.');
          }}
        />
        <Button
          text="Random"
          onClick={() => {
            console.log('Randomising board...');
            initialBoard = randomPuzzle();
            setBoard(copy(initialBoard));
            console.log('Randomised board.');
          }}
        />
      </div>
    </div>
  );
};

export default SudokuSolver;
