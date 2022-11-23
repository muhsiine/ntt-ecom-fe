import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceCommon } from '../../../interfaces/common';
import { Product } from '../../../models/product';
import { environment } from '../../../../environments/environment';
import { ProductFilter } from 'src/app/models/productFilter';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IServiceCommon {

  private baseUrl = `${environment.apiUrl}/products`;

  constructor(private http : HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/all`);
  }

  getProductById(product_id : number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${product_id}`);
  }

  getProductsByCategory(category_id : number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/category/${category_id}`);
  }

  saveProduct(product : Product): Observable<Product>{
      return this.http.post<Product>(`${this.baseUrl}/save`, product);
  }

  getMaxPrice(): Observable<Number>{
    return this.http.get<Number>(`${this.baseUrl}/maxPrice`);
  }

  filter(productFilter : ProductFilter) : Observable<Product[]>{
    return this.http.post<Product[]>(`${this.baseUrl}/filter`, productFilter);
  }

}
