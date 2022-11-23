import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceCommon } from '@odels/common';
import { Order } from '@models/order';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IServiceCommon {

  private baseUrl = `${environment.apiUrl}/orders`;

  constructor(private http : HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/all`);
  }

  getOrdersByUser(user_id : number): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/${user_id}`);
  }
  
}
