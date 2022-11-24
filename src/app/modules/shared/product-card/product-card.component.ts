import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@models/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() data :Product = new Product();
  isFavorite : boolean =true; 
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.data);
  }

}
