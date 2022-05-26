import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceCommon } from '../interfaces/common';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IServiceCommon {

  private apiUrl = 'http://localhost:8080/orders/';

  constructor(private http : HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrdersByUser(user_id : number): Observable<Order[]>{
    return this.http.get<Order[]>(this.apiUrl+user_id);
  }
  
}
