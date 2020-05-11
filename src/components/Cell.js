import React from 'react';

const Cell = ({ row, col, value, initiallySet, hover, setHover }) => {
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

  return (
    <td
      onMouseEnter={() => setHover({ row: row, col: col })}
      onMouseLeave={() => setHover({ row: -1, col: -1 })}
      className={className}
    >
      {value === 0 ? '' : value}
    </td>
  );
};

export default Cell;
