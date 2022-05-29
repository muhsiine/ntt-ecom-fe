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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(res => this.products = res);
  }

  ShowDeleteProduct(id: any) {
    this.showDeleteModal = true;
  }
  closeDeleteModal() {
    this.showDeleteModal = false;
  }
}
