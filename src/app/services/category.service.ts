import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category';
import { IServiceCommon } from '../interfaces/common';


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements IServiceCommon {

  private apiUrl = 'http://localhost:8080/categories/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

}
