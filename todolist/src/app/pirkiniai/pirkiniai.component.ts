import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pirkiniai',
  templateUrl: './pirkiniai.component.html',
  styleUrls: ['./pirkiniai.component.css']
})
export class PirkiniaiComponent implements OnInit {

  pavadinimas:string;
  kiekis:string;
  prekes:string[]=[];

  addPreke(){

  };

  constructor() { }

  ngOnInit(): void {
  }

}
