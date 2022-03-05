import React from "react";
import { Button, Input, DialogFrame } from "./components";

export default function App() {
  return (
    <div className="app">
      <DialogFrame />
      <div className="app__controls">
        <Input />
        <Button />
        <Button />
      </div>
    </div>
  );
}
