import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { board: App.initialBoard() };
  }

  render() {
    const board = this.state.board;
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
            this.solve().then((b) => (b ? console.log('Solved.') : null));
          }}
        >
          Solve
        </button>
        <button
          onClick={() => {
            console.log('Resetting...');
            this.reset();
            console.log('Reset.');
          }}
        >
          Reset
        </button>
      </div>
    );
  }

  static initialBoard() {
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

  reset() {
    this.setState({ board: App.initialBoard() });
  }

  async solve() {
    await this.sleep(0);
    const board = this.state.board;
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] !== 0) {
          // can't change filled cells
          continue;
        }
        // try 1 to 9 for the empty cell
        for (let num = 1; num <= 9; num++) {
          if (App.isValidMove(board, row, col, num)) {
            // valid move, try it
            board[row][col] = num;
            this.setState({ board: board });
            if (await this.solve()) {
              return true;
            } else {
              // didn't solve with this move, backtrack
              board[row][col] = 0;
              this.setState({ board: board });
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

  static isValidMove(board, row, col, num) {
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
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] ===
        num
      ) {
        return false;
      }
    }
    return true;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default App;
