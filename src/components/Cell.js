import React from 'react';
import { isValidMove } from './Solver';

const className = (row, col, initiallySet, hover) => {
  let className = `Cell Cell-row-${row} Cell-col-${col}`;
  if (initiallySet) {
    className += ' Cell-initiallySet';
  }
  if (hover.row === row && hover.col === col) {
    className += ' Cell-hover';
  } else if (
    hover.row === row ||
    hover.col === col ||
    (Math.floor(hover.row / 3) === Math.floor(row / 3) &&
      Math.floor(hover.col / 3) === Math.floor(col / 3))
  ) {
    className += ' Cell-neighbourHover';
  }
  return className;
};

const Cell = ({ row, col, value, initiallySet, hover, setHover, board, setBoard, disabled }) => {
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

  return (
    <input
      className={className(row, col, initiallySet, hover)}
      onMouseEnter={() => setHover({ row: row, col: col })}
      onMouseLeave={() => setHover({ row: -1, col: -1 })}
      value={value === 0 ? '' : value}
      onChange={(e) => updateCell(row, col, e.target.value)}
      readOnly={disabled}
      maxLength={1}
    />
  );
};

export default Cell;
