import { Component, OnInit } from '@angular/core';
import { Uzduotis } from './uzduotis.model';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  pavadinimas:string="";
  tipas:string="";
  uzdsarasas:Uzduotis []=[];

  constructor() { }

  ngOnInit(): void {
  }

  addUzduotis(){
    if (this.pavadinimas!="" && this.tipas!="") {
      this.uzdsarasas.push( new Uzduotis (this.pavadinimas, this.tipas));
      this.pavadinimas="";
      this.tipas="";
    }
  }

  trinti(i){
    this.uzdsarasas.splice(i,1)
  }

}
