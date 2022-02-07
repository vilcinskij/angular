import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaras',
  templateUrl: './rezervuaras.component.html',
  styleUrls: ['./rezervuaras.component.css']
})
export class RezervuarasComponent implements OnInit {

  talpa: number;
  greitis: number;
  laikas: number;
  rezultatas:number = 0;

  rezultatai:number[]=[];

  skaiciuoti () {
    this.rezultatas=(this.laikas*this.greitis/this.talpa) * 100;
    this.rezultatai.push(this.rezultatas)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
