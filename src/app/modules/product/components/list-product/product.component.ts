import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductService } from '@services/product.service';
import { Notifier } from 'src/app/models/notifier';
import { CategoryService } from '@services/category.service';
import { CategoryByLang } from 'src/app/models/categoryByLang';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ProductFilter } from 'src/app/models/productFilter';

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
  filterForm = new UntypedFormGroup({
    name: new UntypedFormControl(null),
    description: new UntypedFormControl(null),
    price1: new UntypedFormControl(null),
    price2: new UntypedFormControl(null),
    categoryId: new UntypedFormControl(null),
    initialDate: new UntypedFormControl(null),
    endDate: new UntypedFormControl(null)
  });
  typeShow: string = 'list';

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
        },
        err => {
          this.notifierServire.showNotification(Notifier.ERROR, "Error", err.error.message);
          this.products = [];
        })
  }

  toggelListView(type: string) {
    this.typeShow = type;
  }

}
