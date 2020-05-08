import React from 'react';

const Cell = ({ value }) => {
  return <td className="Cell">{value === 0 ? '' : value}</td>;
};

export default Cell;
