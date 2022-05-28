import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceCommon } from '../interfaces/common';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IServiceCommon {

  private url = environment.apiUrl + 'products/';

  constructor(private http : HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url+'all');
  }

  getProductById(product_id : number): Observable<Product>{
    return this.http.get<Product>(this.url+product_id);
  }

  getProductsByUser(user_id : number): Observable<Product[]>{
    return this.http.get<Product[]>(this.url+'user/'+user_id);
  }

  getProductsByCategory(category_id : number): Observable<Product[]>{
    return this.http.get<Product[]>(this.url+"category/"+category_id);
  }

  getProductsByQuantity(quantity ?: number): Observable<Product[]> | null{
    return quantity != null && quantity > 0 ? this.http.get<Product[]>(this.url+quantity) : null;
  }

  saveProduct(product : Product, product_id ?: number): Observable<Product>{
    if(product_id != null){
      return this.http.put<Product>(this.url+'edit/'+product_id, product);
    }else{
      return this.http.post<Product>(this.url+'save', product);
    }
  }

}
