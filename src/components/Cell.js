import React from 'react';

const Cell = ({ row, col, value, initiallySet }) => {
  const className = `Cell-row-${row} Cell-col-${col} Cell-initiallySet-${initiallySet} Cell`;
  return <td className={className}>{value === 0 ? '' : value}</td>;
};

export default Cell;
