import {Component, NgZone, ViewChild} from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {Message} from '../data/message';
import {ConversationServices} from '../services/conversationServices';
import {ActivatedRoute} from '@angular/router';

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
  container: any;
  private id: string;

  constructor(private conversationServices: ConversationServices, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (!this.id) {
        conversationServices.getNewConversationId().subscribe(
          id => {
            this.id = id;
            this.getMessages(this.id);
          });
      }
    });
  }

  getMessages(id) {
    this.conversationServices.getChatMessages(id).subscribe();
  }

  sendMessage(message) {
    if( message.length > 0){
      this.messages.push(new Message(true, message));
      console.log(this.messages);
      this.stompClient.send('secured/user/queue/specific-user', {}, message);
      this.chatMessage = '';
      this.messages.push(new Message(false, message));
      this.container = document.getElementById('xxx');
      this.container.scrollTop = this.container.scrollHeight;
    }
  }

}
