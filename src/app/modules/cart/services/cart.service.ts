import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = `${environment.apiUrl}/carts`;

  constructor(private http : HttpClient) { }

  sendCheckOutlist(cart_id: number = 1, cartItems : CartItem[]): Observable<Cart>{
    return this.http.post<Cart>(`${this.baseUrl}/${cart_id}/add/cartItems/`, cartItems);
}
}
