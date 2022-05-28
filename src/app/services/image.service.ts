import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = `${environment.apiUrl}/images`;

  constructor(private http : HttpClient) { }

  getImageByProduct(product_id : number) : Observable<Image>{
    return this.http.get<Image>(`${this.baseUrl}/product/${product_id}`);
  }

}
