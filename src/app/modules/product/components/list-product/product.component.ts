import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { CategoryByLang } from 'src/app/models/categoryByLang';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductFilter } from 'src/app/models/productFilter';
import * as moment from 'moment-timezone';

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
  maxPrice: Number = 0;
  minRangevalue: Number | null = null;
  maxRangevalue: Number | null = null;
  categories: CategoryByLang[] = [];
  filterForm = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    price1: new FormControl(null),
    price2: new FormControl(null),
    categoryId: new FormControl(null),
    initialDate: new FormControl(null),
    endDate: new FormControl(null)
  });
  productFilter : ProductFilter = new  ProductFilter();

  constructor(private productService: ProductService, private notifierServire: NotifierService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loading = true;
    this.filterForm.reset();
    this.productService.getAll().subscribe(

      res => {
        this.products = res;
        this.loading = false;
      },
      err => {
        this.notifierServire.showNotification(err);
        this.loading = false;
      });

    this.productService.getMaxPrice().subscribe(
      res => this.maxPrice = res
    );

    this.categoryService.getAll().subscribe(
      res => {
        this.categories = res;
       // this.filterForm.controls['categoryId'].setValue(res[0]?.id);
      }
    )
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
  minRangeValueChanged(e: any) {
    this.minRangevalue = e.target.value;
  }

  maxRangeValueChanged(e: any) {
    this.maxRangevalue = e.target.value;
  }

  filter() {
    var startDate = moment.utc(this.filterForm.value.initialDate, "YYYY-MM-DD HH:mm:ss").tz("Europe/Paris").toDate();
    var endDate = moment.utc(this.filterForm.value.endDate, "YYYY-MM-DD HH:mm:ss").tz("Europe/Paris").toDate();
    this.productFilter = new ProductFilter(
      this.filterForm.value.name,
      this.filterForm.value.description,
      this.filterForm.value.categoryId,
      startDate,
      endDate,
      this.filterForm.value.price1,
      this.filterForm.value.price2
    );
    this.productService.filter(this.productFilter).subscribe(
      res => {
        this.products = res
        console.log("products:" + this.products)
      }
    )
  }

  clear() {
    this.filterForm.reset();
    this.maxRangevalue= null;
    this.minRangevalue= null;
  }
}
