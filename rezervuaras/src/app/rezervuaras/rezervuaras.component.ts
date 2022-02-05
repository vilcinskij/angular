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
  rezultatas:number;

  skaiciuoti () {
    this.rezultatas=this.talpa*2
  }

  constructor() { }

  ngOnInit(): void {
  }

}
