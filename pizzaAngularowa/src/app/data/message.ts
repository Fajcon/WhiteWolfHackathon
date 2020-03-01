export class Message {
  constructor(isMe: boolean, text: any) {
    this.text = text;
    this.isMe = isMe;
  }

  isMe: boolean;
  text: string;
}
