import {Component, NgZone, ViewChild} from '@angular/core';
import {ConversationServices} from '../services/conversationServices';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  private value = '';
  private chatMessage = '';
  messages = [];
  private id: string;
  private sentByDoctor = false;

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
      this.getMessages(this.id);
    });
  }

  getMessages(id) {
    this.conversationServices.getChatMessages(id).subscribe(msg => {
      this.messages = [];
      msg.forEach(m => this.messages.push(m));
    });
  }

  sendMessage(message) {
    if (message.length > 0) {
      this.conversationServices.addNewMessage(message, this.id, this.sentByDoctor).subscribe(
        asd => {
          this.getMessages(this.id);
        }
      );
      this.chatMessage = '';
    }
  }

}
