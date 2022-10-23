import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Image } from 'src/app/models/image';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../product/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  images :Image[] = [];
  products: Product[] = [
    {id : 1, name : 'Product 1', description: 'descripcion Product 1', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 2, name : 'Product 2', description: 'descripcion Product 2', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 3, name : 'Product 3', description: 'descripcion Product 3', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 4, name : 'Product 4', description: 'descripcion Product 4', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 5, name : 'Product 5', description: 'descripcion Product 5', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 6, name : 'Product 6', description: 'descripcion Product 6', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 7, name : 'Product 7', description: 'descripcion Product 7', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 8, name : 'Product 8', description: 'descripcion Product 8', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 9, name : 'Product 9', description: 'descripcion Product 9', category : {id: 1, categoryCode: 'FSN', description: 'Fashion', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 10, name : 'Product 10', description: 'descripcion Product 10', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 11, name : 'Product 11', description: 'descripcion Product 11', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 12, name : 'Product 12', description: 'descripcion Product 12', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 13, name : 'Product 13', description: 'descripcion Product 13', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 14, name : 'Product 14', description: 'descripcion Product 14', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 15, name : 'Product 15', description: 'descripcion Product 15', category : {id: 2, categoryCode: 'ELC', description: 'Electronics', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 16, name : 'Product 16', description: 'descripcion Product 16', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 17, name : 'Product 17', description: 'descripcion Product 17', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 18, name : 'Product 18', description: 'descripcion Product 18', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 19, name : 'Product 19', description: 'descripcion Product 19', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
    {id : 20, name : 'Product 20', description: 'descripcion Product 20', category : {id: 3, categoryCode: 'HAF', description: 'Health & Fitness', icon: ''}, price: 1, nmAvailableItems: 100, images : this.images, quantity: 10, created_at: new Date(), modified_at: new Date(), deleted_at: new Date() },
  ];

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }
}
