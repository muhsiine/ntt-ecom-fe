import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listProduct: Product[]=[
    {id:1,name:"Apple AirPods Pro",price:450,quantity:200,created_at:new Date(),modified_at:null,deleted_at:null,description:"",category:{id:1,categoryCode:"ae",description:"Electronique",icon:"bi-motherboard-fill"}},
    {id:1,name:"Apple AirPods Pro",price:450,quantity:200,created_at:new Date(),modified_at:null,deleted_at:null,description:"",category:{id:1,categoryCode:"ae",description:"Electronique",icon:"bi-motherboard-fill"}},
    {id:1,name:"Apple AirPods Pro",price:450,quantity:200,created_at:new Date(),modified_at:null,deleted_at:null,description:"",category:{id:1,categoryCode:"ae",description:"Electronique",icon:"bi-motherboard-fill"}},
    {id:1,name:"Apple AirPods Pro",price:450,quantity:200,created_at:new Date(),modified_at:null,deleted_at:null,description:"",category:{id:1,categoryCode:"ae",description:"Electronique",icon:"bi-motherboard-fill"}},
    {id:1,name:"Apple AirPods Pro",price:450,quantity:200,created_at:new Date(),modified_at:null,deleted_at:null,description:"",category:{id:1,categoryCode:"ae",description:"Electronique",icon:"bi-motherboard-fill"}},
  ];
  constructor() {
  
   }

  ngOnInit(): void {
  }

}
