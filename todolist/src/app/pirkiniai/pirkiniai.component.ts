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
  prekes: Preke[]=[ new Preke("Obuoliai", "1kg"), new Preke("kriause", "2kg")];

  addPreke(){

  };

  constructor() { }

  ngOnInit(): void {
  }

}
