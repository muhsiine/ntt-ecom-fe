import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-list-product-grid',
  templateUrl: './list-product-grid.component.html',
  styleUrls: ['./list-product-grid.component.scss']
})
export class ListProductGridComponent implements OnInit {
  
  @Input()
  products: Product[] = [];

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
