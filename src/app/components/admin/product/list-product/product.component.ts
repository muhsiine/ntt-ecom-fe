import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  showDeleteModal:boolean=false;
  products: { productName: string,category:string,color:string,price:number}[] = [
    { productName: "product1",category:"category1",color:"color1",price:200},
    { productName: "product1",category:"category1",color:"color1",price:200},
    { productName: "product1",category:"category1",color:"color1",price:200},
    { productName: "product1",category:"category1",color:"color1",price:200},
    { productName: "product1",category:"category1",color:"color1",price:200},
    { productName: "product1",category:"category1",color:"color1",price:200},
    { productName: "product1",category:"category1",color:"color1",price:200},
    { productName: "product1",category:"category1",color:"color1",price:200},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(id:any){
     this.showDeleteModal=true;
  }
  closeDeleteModal(){
this.showDeleteModal=false;
  }
}
