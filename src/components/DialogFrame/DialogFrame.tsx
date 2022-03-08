import React from "react";
import { Message } from "../index";
import { IMessage } from "../../types";
import "./DialogFrame.scss";

interface DialogFrameProps {
  messages: IMessage[];
}

export default function DialogFrame({ messages }: DialogFrameProps) {
  return (
    <div className="dialog-frame">
      {messages.map((item: IMessage, index: number) => (
        <Message key={index} text={item.text} isUser={item.isUser} />
      ))}
    </div>
  );
}
