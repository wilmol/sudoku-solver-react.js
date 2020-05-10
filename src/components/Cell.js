import React, { useState } from 'react';

const Cell = ({ row, col, value, initiallySet }) => {
  const [isHover, setHover] = useState(false);
  const className = `Cell-row-${row} Cell-col-${col} Cell-initiallySet-${initiallySet} Cell-isHover-${isHover} Cell`;
  return (
    <td
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={className}
    >
      {value === 0 ? '' : value}
    </td>
  );
};

export default Cell;
