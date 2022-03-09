import React from "react";
import "./Button.scss";

interface ButtonProps {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit" | "reset";
  ico: React.ReactElement;
}

export default function Button({ type, handleClick, ico }: ButtonProps) {
  return (
    <button type={type} onClick={handleClick} className="button">
      {ico}
    </button>
  );
}
