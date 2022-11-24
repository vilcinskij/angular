import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products;
  orderEmitter=new EventEmitter<{name:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  order(name:string){
    console.log("Užsakomas: "+name);
  }

}
