import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceCommon } from '../interfaces/common';
import { Product } from '../models/product';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IServiceCommon {

  private apiUrl = 'http://localhost:8080/products/';

  constructor(private http : HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(product_id : number): Observable<Product>{
    return this.http.get<Product>(this.apiUrl+product_id);
  }

  getProductsByUser(user_id : number): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+user_id);
  }

  getProductsByCategory(category_id : number): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+"/category"+category_id);
  }

  getProductsByQuantity(quantity ?: number): Observable<Product[]> | null{
    return quantity != null && quantity > 0 ? this.http.get<Product[]>(this.apiUrl+quantity) : null;
  }

  saveProduct(product : Product, product_id ?: number): Observable<Product>{
    if(product_id != null){
      return this.http.put<Product>(this.apiUrl+product_id, product);
    }else{
      return this.http.post<Product>(this.apiUrl, product);
    }
  }

}
