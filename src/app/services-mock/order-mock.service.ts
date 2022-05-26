import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderMockService {

  constructor() { };

  private mockOrder: Order[] = [
    {
      order_id : 1, 
      status_id : 1,
      created_at  : new Date(),
      modified_at : new Date(),
      order_amount : 7
        
    },
    {
      order_id : 2, 
      status_id : 1,
      created_at  : new Date(),
      modified_at : new Date(),
      order_amount : 3
    },
    {
      order_id : 3, 
      status_id : 1,
      created_at  : new Date(),
      modified_at : new Date(),
      order_amount : 1
    }
];

  getAll() : Observable<Order[]>{
    return of(this.mockOrder);
  }
}
