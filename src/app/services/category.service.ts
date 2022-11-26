import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceCommon } from '../models/common';
import { environment } from '../../environments/environment';
import { CategoryByLang } from 'src/app/models/categoryByLang';


@Injectable({
  providedIn: 'root'
})
export class CategoryService implements IServiceCommon {

  private baseUrl = `${environment.apiUrl}/categories`;
  private lang = 'en';
  

  constructor(private http: HttpClient) {
    
   }

  getAll(): Observable<CategoryByLang[]> {
    this.lang = localStorage.getItem('locale') || 'en';
    return this.http.get<CategoryByLang[]>(`${this.baseUrl}/all`, { params: { lang: this.lang.toUpperCase() }});
  }

}
