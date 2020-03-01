import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DoctorComponent} from '../doctor/doctor.component';
import {LogInComponent} from './log-in/log-in.component';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  logIn() {
    const dialogRef = this.dialog.open(LogInComponent, {
      width: '500px',
      data: 'cos'
    });
  }
}
