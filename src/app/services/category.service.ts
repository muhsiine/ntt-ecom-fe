import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { IServiceCommon } from '../interfaces/common';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements IServiceCommon {

  private baseUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/all`);
  }

}
