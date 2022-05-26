import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:8080/images/';

  constructor(private http : HttpClient) { }

  getImageByProduct(product_id : number) : Observable<Image>{
    return this.http.get<Image>(this.apiUrl+product_id);
  }

}
