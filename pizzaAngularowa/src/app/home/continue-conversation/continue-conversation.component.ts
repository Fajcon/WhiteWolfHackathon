import { Component, OnInit } from '@angular/core';
import {ConversationServices} from '../../services/conversationServices';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-continue-conversation',
  templateUrl: './continue-conversation.component.html',
  styleUrls: ['./continue-conversation.component.css']
})
export class ContinueConversationComponent implements OnInit {
  id = '';
  animal: string;

  constructor(public dialogRef: MatDialogRef<ContinueConversationComponent>, private conversationServices: ConversationServices, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit() {
    this.conversationServices.zwierzatkaDoLonga(this.animal.replace(/\s/g, "")).subscribe( id => {
      this.router.navigate([`../chat/` + id], { relativeTo: this.route});
    });
    this.dialogRef.close();
  }
}
