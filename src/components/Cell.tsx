import React from 'react';
import { isValidMove } from './Solver';
import { BoardState } from './Board';

type HoverState = {
  row: number;
  col: number;
};

type CellProps = {
  row: number;
  col: number;
  value: number;
  initiallySet: boolean;
  hover: HoverState;
  setHover: React.Dispatch<React.SetStateAction<HoverState>>;
  board: BoardState;
  setBoard: React.Dispatch<React.SetStateAction<BoardState>>;
  disabled: boolean;
};

const Cell: React.FC<CellProps> = ({
  row,
  col,
  value,
  initiallySet,
  hover,
  setHover,
  board,
  setBoard,
  disabled,
}) => {
  const getClassName = (
    row: number,
    col: number,
    initiallySet: boolean,
    hover: HoverState
  ): string => {
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

  const updateCell = (row: number, col: number, val: string): void => {
    // convert to int as that is what solvers expect
    const intVal = !val ? 0 : parseInt(val);

    // input validation
    if (isNaN(intVal) || intVal > 9 || intVal < 0) {
      console.log(`(invalid value) board[${row}][${col}] = ${val}`);
      return;
    }
    if (intVal > 0 && !isValidMove(board, row, col, intVal)) {
      console.log(`(invalidates puzzle) board[${row}][${col}] = ${intVal}`);
      return;
    }

    console.log(`board[${row}][${col}] = ${intVal}`);
    // without copying the renders are delayed
    // TODO(wilmol) why is this?
    const boardCopy = [...board];
    boardCopy[row][col].value = intVal;
    boardCopy[row][col].initiallySet = intVal > 0;
    setBoard(boardCopy);
  };

  return (
    <input
      className={getClassName(row, col, initiallySet, hover)}
      onMouseEnter={(): void => setHover({ row: row, col: col })}
      onMouseLeave={(): void => setHover({ row: -1, col: -1 })}
      value={value === 0 ? '' : value}
      onChange={(e): void => updateCell(row, col, e.target.value)}
      readOnly={disabled}
      maxLength={1}
    />
  );
};

export default Cell;
