import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { CategoryByLang } from 'src/app/models/categoryByLang';
import { FormControl, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductFilter } from 'src/app/models/productFilter';
import { Notifier } from '../../../../models/notifier';

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
  productFilter : ProductFilter = new  ProductFilter();
  filterForm = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    price1: new FormControl(null),
    price2: new FormControl(null),
    categoryId: new FormControl(null),
    initialDate: new FormControl(null),
    endDate: new FormControl(null)
  });
  isList: boolean = true;

  constructor(private productService: ProductService, private notifierServire: NotifierService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loading = true;
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
 
  filter(productFilter: ProductFilter) {
      this.productService.filter(productFilter).subscribe(
        res => {
          this.products = res
          console.log("products:" + this.products)
        },
        err => {
          this.notifierServire.showNotification(Notifier.ERROR, "Error", err.error.message);
          this.products = [];
        })
  }

  toggelListView(isList: boolean) {
    this.isList = isList;
  }

}
