import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-list-product-admin',
  templateUrl: './list-product-admin.component.html',
  styleUrls: ['./list-product-admin.component.scss']
})
export class ListProductAdminComponent implements OnInit {

  checks = false;
  loading: boolean = false;
  showDeleteModal: boolean = false;

  @Input()
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  bulk(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }

  ShowDeleteProduct(id: any) {
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

}
