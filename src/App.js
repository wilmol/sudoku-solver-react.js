import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ],
    };
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
                    <td>{cell === '.' ? '' : cell}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={() => this.solve()}>Solve</button>
      </div>
    );
  }

  solve() {
    console.log('Solving...');
  }
}

export default App;
