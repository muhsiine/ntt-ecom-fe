import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/modules/category/category.service';
import { ProductService } from 'src/app/modules/product/services/product.service';

import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  categories:Category[]=[];
  body: any={};
  prodForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });

  constructor(private categoryService:CategoryService, private productService:ProductService, private location: Location) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(res => this.categories = res)
  }
  
  AddProduct(){
    console.log(this.prodForm);
      //  this.body = {
      //   productId: value.productId,
      //   name:value.name,
      //   price: value.price,
      //   description:value.description,
      //   category:value.category,

      // }
  
      // this.productService.saveProduct(this.body)
      //   .subscribe(response => {
      //     console.log(response)
      //   })
  } 

  goBack(){
    this.location.back();
  }

}


