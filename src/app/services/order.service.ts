import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceCommon } from '../interfaces/common';
import { Order } from '../models/order';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IServiceCommon {

  private url = environment.apiUrl + 'orders/'

  constructor(private http : HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url+'all');
  }

  getOrdersByUser(user_id : number): Observable<Order[]>{
    return this.http.get<Order[]>(this.url+user_id);
  }
  
}
