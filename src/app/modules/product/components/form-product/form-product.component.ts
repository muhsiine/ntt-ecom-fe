import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/modules/category/category.service';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  categories:Category[]=[];
  body: any={};
  constructor(private categoryService:CategoryService,private productService:ProductService) { }

  ngOnInit(): void {

this.categoryService.getAll().subscribe(res => this.categories = res)
  }
  
  AddProduct(value: any){

       this.body = {
        productId: value.productId,
        name:value.name,
        price: value.price,
        description:value.description,
        category:value.category,

      }
  
      this.productService.saveProduct(this.body)
        .subscribe(response => {
          console.log(response)
        })
    } 
  }


