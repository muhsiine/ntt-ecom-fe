import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { CategoryService } from 'src/app/modules/category/services/category.service';
import { CategoryByLang } from 'src/app/models/categoryByLang';
import { FormControl, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
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
  validDate : String | null = null;
  validPrice : String | null = null;
  filterForm = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    price1: new FormControl(null),
    price2: new FormControl(null),
    categoryId: new FormControl(null),
    initialDate: new FormControl(null),
    endDate: new FormControl(null)
  });

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
    this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2);
  }

  maxRangeValueChanged(e: any) {
    this.maxRangevalue = e.target.value;
    this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2);
  }

  filter() {
    
    if(this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2)){
      this.validDate = null;
      this.validPrice = null;
      var startDate = this.filterForm.value.initialDate;
      var endDate = this.filterForm.value.endDate;
      if(startDate != null){
        startDate = new Date(startDate);
      }
      if(endDate != null){
        endDate = new Date(endDate);
      }
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
  }

  clear() {
    this.filterForm.reset();
    this.maxRangevalue= null;
    this.minRangevalue= null;
    this.validDate = null;
    this.validPrice = null;
  }

  datesPricesValidator(initialDate : Date, endDate : Date, price1 : Number, price2 : Number) : Boolean{
    let isDateValid = true;
    let isPriceValid = true;

    if(initialDate != null && endDate != null){
      if(new Date(initialDate) <= new Date(endDate)){
        this.validDate = null;
        isDateValid = true;
      }else{
        this.validDate = "Min Date should be inferior than Max Date";
        isDateValid = false;
      }
    }

    if(price1 != null && price2 != null){
      if(price1 <= price2){
        this.validPrice = null;
        isPriceValid = true;
      }else{
        this.validPrice = "Min Price should be inferior than Max Price";
        isPriceValid = false;
      }
    }
 
    return isDateValid && isPriceValid ? true : false;
  }

  dateChangeValue(){
    this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2);
  }

}
