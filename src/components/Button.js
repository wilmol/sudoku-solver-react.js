import React from 'react';

const Button = ({ text, onClick, disabled }) => {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
