import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {FindDoktorModalComponent} from './find-doktor-modal/find-doktor-modal.component';
import {ContinueConversationComponent} from './continue-conversation/continue-conversation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  generateReportPopUp(): void {
    const dialogRef = this.dialog.open(FindDoktorModalComponent, {
      width: '500px',
      data: 'cos'
    });
  }


  ngOnInit() {
  }

  continueConversationPopUp() {
    const dialogRef = this.dialog.open(ContinueConversationComponent, {
      width: '500px',
      data: 'cos'
    });
  }
}
