import React, { useState } from 'react';
import './App.css';

function initialBoard() {
  return [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];
}

function isValidMove(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    // check row
    if (board[i][col] === num) {
      return false;
    }
    // check col
    if (board[row][i] === num) {
      return false;
    }
    // check 3x3 square
    if (
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === num
    ) {
      return false;
    }
  }
  return true;
}

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

function App() {
  const [board, setBoard] = useState(initialBoard);

  async function solve() {
    await sleep();
    const boardCopy = [...board];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (boardCopy[row][col] !== 0) {
          // can't change filled cells
          continue;
        }
        // try 1 to 9 for the empty cell
        for (let num = 1; num <= 9; num++) {
          if (isValidMove(boardCopy, row, col, num)) {
            // valid move, try it
            boardCopy[row][col] = num;
            setBoard(boardCopy);
            if (await solve()) {
              return true;
            } else {
              // didn't solve with this move, backtrack
              boardCopy[row][col] = 0;
              setBoard(boardCopy);
            }
          }
        }
        // nothing worked for empty cell, must have deprived boards solution with a previous move
        return false;
      }
    }
    // all cells filled
    return true;
  }

  return (
    <div>
      <table border="1">
        <tbody>
          {board.map((row, i) => {
            return (
              <tr key={i}>
                {row.map((cell) => (
                  <td>{cell === 0 ? '' : cell}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          console.log('Solving...');
          solve().then((b) => console.log(b ? 'Solved.' : 'Unsolveable.'));
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
}

export default App;
