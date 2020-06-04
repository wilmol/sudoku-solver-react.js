import React from 'react';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
