import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctor = {
    title: 'lek. Zbigniew Tambył',
    subtitle: 'psychiatra, seksuolog',
    image: 'https://gww.pl/media/cache/60/66/60660f6802da568173454291c12f9ace.jpg',
    content: 'Li'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
