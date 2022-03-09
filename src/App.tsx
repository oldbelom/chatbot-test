import React from "react";
import { Button, Input, DialogFrame } from "./components";
import { getData, updateLocalMessages } from "./utils";
import { InitOptions, ReadyOptions, RequestOptions, IMessage } from "./types";
import "./App.scss";
import RepeatIco from "./assets/repeat.svg";
import SendIco from "./assets/send.svg";

const URL = "https://biz.nanosemantics.ru/api/2.1/json/Chat";
const UUID = "772c9859-4dd3-4a0d-b87d-d76b9f43cfa4";
const EUID = "00b2fcbe-f27f-437b-a0d5-91072d840ed3";

export default function App() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [messages, setMessages] = React.useState<IMessage[]>(() => {
    const prev = JSON.parse(localStorage.getItem("messages") as string);
    return prev || [];
  });

  const initChat = async () => {
    const options: InitOptions = {
      uuid: UUID,
    };

    if (localStorage.getItem("cuid")) {
      options.cuid = localStorage.getItem("cuid") as string;
    }

    const data = await getData(URL, "init", options);

    localStorage.setItem("cuid", data.result.cuid);
  };

  const readyChat = async () => {
    const options: ReadyOptions = {
      cuid: localStorage.getItem("cuid") as string,
      euid: EUID,
    };

    const data = await getData(URL, "event", options);

    const botMessage: IMessage = {
      isUser: false,
      text: data.result.text.value,
    };

    if (!localStorage.getItem("messages")) {
      setMessages((prev) => [...prev, botMessage]);
      localStorage.setItem("messages", JSON.stringify([botMessage]));
    }
  };

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

    const options: RequestOptions = {
      cuid: localStorage.getItem("cuid") as string,
      text: inputValue,
    };

    const userMessage: IMessage = {
      isUser: true,
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    updateLocalMessages(userMessage);
    setInputValue("");

    const data = await getData(URL, "request", options);

    const botMessage: IMessage = {
      isUser: false,
      text: data.result.text.value,
    };

    if (localStorage.getItem("cuid") !== data.result.cuid) {
      localStorage.setItem("cuid", data.result.cuid);
    }

    setMessages((prev) => [...prev, botMessage]);
    updateLocalMessages(botMessage);
  };

  const refreshChat = () => {
    setMessages([]);
    localStorage.removeItem("cuid");
    localStorage.removeItem("messages");
    initChat().then(() => readyChat());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    initChat().then(() => readyChat());
  }, []);

  return (
    <div className="app">
      <header className="app__header">Chatbot</header>
      <DialogFrame messages={messages} />
      <form onSubmit={sendMessage} className="app__controls">
        <Button type="button" handleClick={refreshChat} ico={<RepeatIco />} />
        <Input
          handleChange={handleChange}
          value={inputValue}
          placeholder="Введите сообщение"
        />
        <Button type="submit" ico={<SendIco />} />
      </form>
    </div>
  );
}
