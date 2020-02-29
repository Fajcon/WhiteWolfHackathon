import { Component, OnInit } from '@angular/core';
export interface Lekarz {
  title: string;
  subtitle: string;
  image: string;
  content: string;
}

const ListaLekarzy: Lekarz[] = [
  {title: "lek. Piotr Gdziebył", subtitle: 'psychiatra', image: "https://gfx.chillizet.pl/var/chillizet/storage/images/news/pracuje-w-szpitalu-i-jest-gwiazda-internetu-doktor-mike-to-najprzystojniejszy-lekarz-na-swiecie-14487/1305472-1-pol-PL/Pracuje-w-szpitalu-i-jest-gwiazda-internetu.-Doktor-Mike-to-najprzystojniejszy-lekarz-na-swiecie_article.jpg", content: 'H'},
  {title: "dr n. med. Jan Nowak", subtitle: 'psychiatra, psychoterapeuta', image: "https://www.dts24.pl/wp-content/uploads/2017/01/Doktor-Malinowski-maly.jpg", content: 'He'},
  {title: "lek. Zbigniew Tambył", subtitle: 'psychiatra, seksuolog', image: "https://gww.pl/media/cache/60/66/60660f6802da568173454291c12f9ace.jpg", content: 'Li'},
  {title: "lek. Agnieszka Zając", subtitle: 'psychiatra, psychoterapeuta', image: "https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/91/anna-makowska-doktor-ania.jpeg", content: 'Be'},
  {title: "dr n. med. Marta Szczeblo", subtitle: 'psychiatra', image: "https://ocdn.eu/pulscms-transforms/1/UApktkpTURBXy8zZTFlNTZiMDllMDNlNmM4NTIxZjcxMzI3OTYxYTZlYi5qcGeRkwIAzQHk", content: 'B'},
  {title: "lek. Agnieszka Sarniak", subtitle: 'ppsychiatra, seksuolog', image: "https://ocdn.eu/pulscms-transforms/1/JC1ktkpTURBXy9lNDAzYzVmMTIzZjJkYTBjNTk3ZDcxMWI0NGE0OTZjNy5qcGeSlQLNA8AAwsOVAgDNA8DCww", content: 'C'},
  {title: "dr n. med. Jan Kowalski", subtitle: 'psychiatra, seksuolog, internista', image: "https://s10.tvp.pl/images2/0/1/d/uid_01d19bfcca26c59539f53086253387601476370264594_width_636_play_0_pos_0_gs_0_height_356.jpg", content: 'N'},
  {title: "lek. Agnieszka Gdziebyla", subtitle: 'psychiatra, seksuolog', image:"https://i.iplsc.com/doktor-hanna-sikorka-marta-zmuda-trzebiatowska/0007GZF2FEO9AOM0-C122-F4.jpg", content: 'O'},
  {title: "lek. Piotr Miechlło", subtitle: 'psychiatra', image: "https://i.iplsc.com/piotr-garlicki/0004HWQ0X8D5KFIA-C122-F4.jpg", content: 'F'},
  {title: "lek. Zbigniew Nowak", subtitle: 'psychiatra, psychoterapeuta', image: "https://ocdn.eu/pulscms-transforms/1/ro8k9kuTURBXy9kOTYzYjViNS1iOTJlLTQ1MWItYmZjZi01MzQ5YzYxNzBjYjguanBlZ5GVAs0DBwDDw4GhMAE", content: 'Ne'},
];

@Component({
  selector: 'app-list-of-doctors',
  templateUrl: './list-of-doctors.component.html',
  styleUrls: ['./list-of-doctors.component.css']
})
export class ListOfDoctorsComponent implements OnInit {

  listaLekarzy = ListaLekarzy;

  constructor() { }

  ngOnInit() {
  }


}
