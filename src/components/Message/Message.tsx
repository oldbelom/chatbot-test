import React from "react";
import "./Message.scss";

interface DialogFrameProps {
  text: string;
  isUser: boolean;
}

export default function Message({ text, isUser }: DialogFrameProps) {
  return (
    <div className={`message ${isUser ? "message--user" : "message--bot"}`}>
      {text}
    </div>
  );
}
