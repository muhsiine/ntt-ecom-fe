import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@models/product';

@Component({
  selector: 'app-list-product-details',
  templateUrl: './list-product-details.component.html',
  styleUrls: ['./list-product-details.component.scss']
})
export class ListProductDetailsComponent implements OnInit {

  @Input()
  products: Product[] = [];

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onImgError(event: any) {
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
  }
}
