import { IOptions, IMessage } from "./types";

export const getData = async (
  url: string,
  method: string,
  options: IOptions
): Promise<any> => {
  try {
    const response = await fetch(`${url}.${method}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(options),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateLocalMessages = (message: IMessage): void => {
  const prev = JSON.parse(localStorage.getItem("messages") as string);
  localStorage.setItem("messages", JSON.stringify([...prev, message]));
};
