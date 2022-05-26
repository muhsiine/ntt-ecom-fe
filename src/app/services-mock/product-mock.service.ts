import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService {

  constructor() { };

  private mockProducts: Product[] = [
    {
        product_id : 1,
        name : "Iphone 13",
        description : "description of iphone 13",
        category : {category_id : 1, name : "phones"},
        price  : 1000000,
        quantity : 1,
        created_at : new Date(),
        modified_at :  new Date(),
        deleted_at :  new Date()
    },
    {
        product_id : 2,
        name : "Iphone 13 pro max",
        description : "description of iphone 13 pro max",
        category : {category_id : 1, name : "phones"},
        price  : 10000000000000,
        quantity : 1,
        created_at : new Date(),
        modified_at : new Date(),
        deleted_at : new Date()
    },
    {
        product_id : 3,
        name : "ASUS ROG",
        description : "description of Asus ROG",
        category : {category_id : 2, name : "PHONES"},
        price  : 10000000000000,
        quantity : 1,
        created_at : new Date(),
        modified_at : new Date(),
        deleted_at : new Date()
    }
];

  getAll() : Observable<Product[]>{
    return of(this.mockProducts);
  }

  getProductById(product_id : number) : Observable<Product>{
    return new Observable(observer => 
      observer.next(this.mockProducts.find(product => product.product_id === product_id )));
  }

  getProductByCategory(category_id : number) : Observable<Product[]>{
    return of(this.mockProducts.filter(product => product.category.category_id === category_id));
  }

  getProductByQuantity(quantity : number) : Observable<Product[]>{
    return of(this.mockProducts.filter(product => product.quantity === quantity));
  }

  addProduct(newProduct: Product) :Observable<Product> {
    const product_id = this.mockProducts.length + 1;

    this.mockProducts.push({
        ...newProduct,
        product_id : product_id,
        name : "SAMSUNG",
        description : "description of Samsung",
        category : {category_id : 1, name : "PHONES"},
        price  : 10000000000000,
        quantity : 1,
        created_at : new Date(),
        modified_at : new Date(),
        deleted_at : new Date()
    });

    return of(newProduct);
}

updateProduct(productToUpdate : Product) : Observable<Product>{
    this.mockProducts = this.mockProducts.filter((product: Product) => {
      product.product_id !== productToUpdate.product_id;
  });

  this.mockProducts.push(productToUpdate);

  return of(productToUpdate);

}

}
