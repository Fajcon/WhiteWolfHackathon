import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConversationServices} from '../../services/conversationServices';

@Component({
  selector: 'app-find-doktor-modal',
  templateUrl: './find-doktor-modal.component.html',
  styleUrls: ['./find-doktor-modal.component.css']
})
export class FindDoktorModalComponent implements OnInit {
  askDoctor: any;

  constructor(public dialogRef: MatDialogRef<FindDoktorModalComponent>, @Inject(MAT_DIALOG_DATA) public doctorId: string,
              private conversationServices: ConversationServices) {
  }

  ngOnInit() {
  }

  submit(): void {
    this.conversationServices.getConversationId(this.doctorId).subscribe();
    this.dialogRef.close();
  }
}
