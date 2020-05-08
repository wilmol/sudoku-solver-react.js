import React from 'react';

const Cell = ({ row, col, value }) => {
  const className = `Cell-row${row} Cell-col${col} Cell`;
  return <td className={className}>{value === 0 ? '' : value}</td>;
};

export default Cell;
