import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CategoryByLang } from '../../../../models/categoryByLang';
import { ProductFilter } from '../../../../models/productFilter';


@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  showDeleteModal: boolean = false;
  minRangevalue: Number | null = 0;
  maxRangevalue: Number | null = 0;
  productFilter: ProductFilter = new ProductFilter();
  validDate: String | null = null;
  validPrice: String | null = null;
  show: boolean = false;
  checks = false;
  typeShow: string = 'list';

  @Input()
  maxPrice: Number = 0;

  @Input()
  categories: CategoryByLang[] = [];

  @Output()
  submitFiltre: EventEmitter<ProductFilter> = new EventEmitter();

  @Output()
  view: EventEmitter<string> = new EventEmitter();


  filterForm = new UntypedFormGroup({
    name: new UntypedFormControl(null),
    description: new UntypedFormControl(null),
    price1: new UntypedFormControl(null),
    price2: new UntypedFormControl(null),
    categoryId: new UntypedFormControl(null),
    initialDate: new UntypedFormControl(null),
    endDate: new UntypedFormControl(null)
  });


  constructor() { }

  ngOnInit(): void {
    this.filterForm.reset();
  }

  filter() {
    if (this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2)) {
      var startDate = this.filterForm.value.initialDate;
      var endDate = this.filterForm.value.endDate;
      if (startDate != null) {
        startDate = new Date(startDate);
      }
      if (endDate != null) {
        endDate = new Date(endDate);
      }
      var productFilter = new ProductFilter(
        this.filterForm.value.name,
        this.filterForm.value.description,
        this.filterForm.value.categoryId,
        startDate,
        endDate,
        this.filterForm.value.price1,
        this.filterForm.value.price2
      );
      this.submitFiltre.emit(productFilter);
    }
  }

  datesPricesValidator(initialDate: Date, endDate: Date, price1: Number, price2: Number): Boolean {
    let isDateValid = true;
    let isPriceValid = true;

    if (initialDate != null && endDate != null) {
      if (new Date(initialDate) <= new Date(endDate)) {
        this.validDate = null;
        isDateValid = true;
      } else {
        this.validDate = "Min Date should be inferior than Max Date";
        isDateValid = false;
      }
    }

    if (price1 != null && price2 != null) {
      if (price1 <= price2) {
        this.validPrice = null;
        isPriceValid = true;
      } else {
        this.validPrice = "Min Price should be inferior than Max Price";
        isPriceValid = false;
      }
    }

    return isDateValid && isPriceValid ? true : false;
  }
  
  minRangeValueChanged(e: any) {
    this.minRangevalue = e.target.value;
    this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2);
  }

  maxRangeValueChanged(e: any) {
    this.maxRangevalue = e.target.value;
    this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2);
  }

  dateChangeValue() {
    this.datesPricesValidator(this.filterForm.value.initialDate, this.filterForm.value.endDate, this.filterForm.value.price1, this.filterForm.value.price2);
  }

  clear() {
    this.filterForm.reset();
    this.maxRangevalue = null;
    this.minRangevalue = null;
    this.validDate = null;
    this.validPrice = null;
    this.filter();
  }

  bulk(e: any) {
    if (e.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }

  toggelListView(type: string) {
    this.typeShow = type;
    this.view.emit(this.typeShow);
  }


}
