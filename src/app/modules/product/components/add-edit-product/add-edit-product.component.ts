import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CategoryService } from '@services/category.service';
import { ProductService } from '@services/product.service';

import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CategoryByLang } from 'src/app/models/categoryByLang';

@Component({
  selector: 'add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  categories:CategoryByLang[]=[];
  body: any={};
  prodForm = new UntypedFormGroup({
    name: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
    description: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
    price: new UntypedFormControl(null, [Validators.required]),
    category: new UntypedFormControl(null, [Validators.required, Validators.minLength(3)])
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


