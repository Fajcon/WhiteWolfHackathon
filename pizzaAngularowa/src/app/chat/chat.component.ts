import {Component, NgZone, ViewChild} from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  private stompClient;
  private value = '';
  private chatMessage = '';
  messages = [];

  constructor(private _ngZone: NgZone) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const sessionId = '';
    const ws = new SockJS('/secured/room');
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('secured/user/queue/specific-user' + '-user' + sessionId, (message) => {
        if (message.body) {
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message) {
    this.messages.push(message);
    this.stompClient.send('secured/user/queue/specific-user' , {}, message);
    this.chatMessage = '';
  }

}
