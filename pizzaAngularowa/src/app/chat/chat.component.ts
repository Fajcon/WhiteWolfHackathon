import { Component } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  private stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    // const sessionId = '';
    // const ws = new SockJS('/list-of-doctors');
    // this.stompClient = Stomp.over(ws);
    // const that = this;
    // this.stompClient.connect({}, function (frame) {
    //   that.stompClient.subscribe('secured/user/queue/specific-user' + '-user' + sessionId, (message) => {
    //     if (message.body) {
    //       console.log(message.body);
    //     }
    //   });
    // });
  }

  sendMessage(message) {
    // this.stompClient.send('secured/user/queue/specific-user' , {}, message);
  }

}
