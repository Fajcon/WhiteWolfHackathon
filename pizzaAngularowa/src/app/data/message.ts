export class Message {
  constructor(sentbydoctor: boolean, body: any) {
    this.body = body;
    this.sentByDoctor = sentbydoctor;
  }

  sentByDoctor: boolean;
  body: string;
}
