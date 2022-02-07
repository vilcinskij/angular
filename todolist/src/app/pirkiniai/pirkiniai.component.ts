import { Component, OnInit } from '@angular/core';
import { Preke } from './preke.model';

@Component({
  selector: 'app-pirkiniai',
  templateUrl: './pirkiniai.component.html',
  styleUrls: ['./pirkiniai.component.css']
})
export class PirkiniaiComponent implements OnInit {

  pavadinimas:string;
  kiekis:string;
  prekes: Preke[]=[];

  addPreke(){
    this.prekes.push( new Preke (this.pavadinimas, this.kiekis));

  };

  constructor() { }

  ngOnInit(): void {
  }

}
