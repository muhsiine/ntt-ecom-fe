import {
  Component,
  OnInit
} from '@angular/core';
import {
  Product
} from 'src/app/models/product';
import { NotifierService } from 'src/app/services/notifier.service';
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

  constructor(private productService: ProductService, private notifierServire: NotifierService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      res => this.products = res, 
      err => this.notifierServire.showNotification('error', err.statusText, err.message));
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
