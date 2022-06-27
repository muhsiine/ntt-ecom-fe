import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  showDeleteModal: boolean = false;
  products: Product[] = [];
  loading: boolean = false;
  show: boolean = true;
  

  constructor(private productService: ProductService, private notifierServire: NotifierService) { }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe(
      res =>{
       this.products = res;
       this.loading = false;
      },
      err => {
        this.notifierServire.showNotification(err);
        this.loading = false;
      });
  }

  bulk(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }
  checks = false;

  ShowDeleteProduct(id: any) {
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
  }
  onChange() {

  }
}
