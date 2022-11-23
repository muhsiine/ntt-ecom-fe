import { Product } from "./product";

export class CartItem{
    id? : number = 0;
    product ?: Product = new Product();
    quantity ?:number = 0;

    constructor();
    constructor(product: Product, quantity: number);
    constructor(product?: Product, quantity?: number){
      this.product = product;
      this.quantity = quantity;
    }
  }