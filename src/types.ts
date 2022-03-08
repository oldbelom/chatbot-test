export interface InitOptions {
  uuid: string;
  cuid?: string;
}

export interface ReadyOptions {
  cuid: string;
  euid: string;
}

export interface RequestOptions {
  cuid: string;
  text: string;
}

export interface IMessage {
  isUser: boolean;
  text: string;
}

export type IOptions = InitOptions | ReadyOptions | RequestOptions;
