import {Component, OnInit} from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', name: 'bobr'},
  {position: '2', name: 'lew'},
  {position: '3', name: 'malpa'},
  {position: '4', name: 'jednorozec'},
  {position: '5', name: 'koala'},
  {position: '6', name: 'pies'},
  {position: '7', name: 'kot',},
  {position: '8', name: 'sarna'},
  {position: '9', name: 'szynszyl'},
  {position: '10', name: 'serdelka'},
];

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
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  constructor() {
  }

  ngOnInit() {
  }

}
