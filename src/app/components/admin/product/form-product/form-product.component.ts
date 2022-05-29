import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  categories:Category[]=[];
  constructor(private categoryService:CategoryService,private productService:ProductService) { }

  ngOnInit(): void {

this.categoryService.getAll().subscribe(res => this.categories = res)
  }
  

}
