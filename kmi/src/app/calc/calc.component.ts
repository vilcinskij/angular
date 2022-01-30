import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  // Visi kintamieji, kurie bus naudojami
  ugis: number;
  mase: number;
  kmi: number=0;

  calc(){
    this.kmi=(this.mase)/(((this.ugis)*(this.ugis))/10000)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
