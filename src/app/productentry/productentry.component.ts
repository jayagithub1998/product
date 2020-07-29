import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {
  model:Product

  constructor() {
    
   }

  ngOnInit(): void {
   this.model=new Product(111,"book",100) 
  }
save(){
  console.log(this.model)
}
}
