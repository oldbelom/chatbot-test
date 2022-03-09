import React from "react";
import "./Input.scss";

interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export default function Input({
  handleChange,
  value,
  placeholder,
}: InputProps) {
  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      className="input"
      placeholder={placeholder}
      required
      autoFocus
    />
  );
}
