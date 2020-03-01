import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logIn: any;

  constructor(public dialogRef: MatDialogRef<LogInComponent>, @Inject(MAT_DIALOG_DATA) public doctorId: string) {
  }

  ngOnInit() {
  }

  submit(): void {
    // TODO Security
    this.dialogRef.close();
  }

}
