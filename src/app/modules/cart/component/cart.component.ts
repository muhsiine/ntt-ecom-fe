import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Image } from 'src/app/models/image';
import { Product } from 'src/app/models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() counter: number = 0;
  total :number = 0;
  product_total : number = 0;
  product_price : number = 1;
  product_id : number = 0;
  id : number = 0;
  a : boolean = false;
  checkOutProduct: String | null = null;
  notChecked : boolean = true;
  images :Image[] = [];
  cartItems : CartItem[] = [];
  cartItem : CartItem = new CartItem;
  products: Product[] = [
    {id : 1, name : 'Product 1', description: 'descripcion Product 1', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 2, name : 'Product 2', description: 'descripcion Product 2', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 3, name : 'Product 3', description: 'descripcion Product 3', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 4, name : 'Product 4', description: 'descripcion Product 4', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 5, name : 'Product 5', description: 'descripcion Product 5', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 6, name : 'Product 6', description: 'descripcion Product 6', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 7, name : 'Product 7', description: 'descripcion Product 7', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 8, name : 'Product 8', description: 'descripcion Product 8', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 9, name : 'Product 9', description: 'descripcion Product 9', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 10, name : 'Product 10', description: 'descripcion Product 10', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 11, name : 'Product 11', description: 'descripcion Product 11', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 12, name : 'Product 12', description: 'descripcion Product 12', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 13, name : 'Product 13', description: 'descripcion Product 13', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 14, name : 'Product 14', description: 'descripcion Product 14', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 15, name : 'Product 15', description: 'descripcion Product 15', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 16, name : 'Product 16', description: 'descripcion Product 16', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 17, name : 'Product 17', description: 'descripcion Product 17', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 18, name : 'Product 18', description: 'descripcion Product 18', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 19, name : 'Product 19', description: 'descripcion Product 19', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
    {id : 20, name : 'Product 20', description: 'descripcion Product 20', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date()},
  ];

  checkOutForm = new FormGroup({});

  constructor(private location: Location, private cartService: CartService) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  checkOut(checkbox: any, product: Product){
    if(product != null && product.price){
    if(checkbox.target.checked){
      this.checkOutProduct = "";
      this.notChecked = false;
        if(this.total > 1){
          if(product.id == this.product_id){
            this.product_total = 0
          }else{
            this.a = true;
            this.counter = 0;
          }
        }else{
          this.total = 1 * product.price;
          this.counter = 1;
        }
        this.product_price = product.price;
        this.product_id = product.id;
        if(this.a == true){
          this.product_total = this.total;
        }     
        this.cartItem = new CartItem(product, this.counter);
        this.cartItems.push(this.cartItem);  
    }else{
      this.notChecked = true;
      this.counter = 0;
      this.cartItems.splice(this.cartItems.indexOf(this.cartItem), 1);
    }
    if(this.cartItems.length == 0){
      this.total = 0;
    }
  }
 }

  addToCheckOut(e:any){
    let item;
    item = this.cartItems.find(p => p.product?.id == this.product_id);
    if(e.target.value > 0){
      this.total = this.product_total + this.product_price * e.target.value;
    }else{
      this.total = this.product_total;
    }
    item != null && item.quantity != null ? item.quantity = parseInt(e.target.value): item?.quantity;
  }
//
    sendCheckOutList(){
    this.cartItems.length != 0 ?
      this.cartService.sendCheckOutlist(1,this.cartItems).subscribe(response => {console.log(response)}):
      this.checkOutProduct = "Please, check at least select one product";
  }

}
