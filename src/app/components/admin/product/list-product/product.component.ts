import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from 'src/app/models/product';
import {
  ProductService
} from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  showDeleteModal: boolean = false;
  products: Product[] = [];
  show: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => this.products = res);
  }
  bulk(e:any) {
    if (e.target.checked == true) {
      this.checks = true;
    }else{
      this.checks=false;
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
