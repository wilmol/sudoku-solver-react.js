import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
