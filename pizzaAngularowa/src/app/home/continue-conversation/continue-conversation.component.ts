import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continue-conversation',
  templateUrl: './continue-conversation.component.html',
  styleUrls: ['./continue-conversation.component.css']
})
export class ContinueConversationComponent implements OnInit {
  id = '';
  animal: string;

  constructor() { }

  ngOnInit() {
  }

  submit() {

  }
}
