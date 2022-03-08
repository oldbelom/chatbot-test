import React from "react";
import "./Button.scss";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export default function Button({ handleClick, text }: ButtonProps) {
  return (
    <button onClick={handleClick} className="button">
      {text}
    </button>
  );
}
