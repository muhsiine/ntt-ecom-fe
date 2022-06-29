import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliderData:{ title:string, link:string, imgUrl:string }[]=[
    { title:"Product 1", link:"/product/1", imgUrl:"https://avartanslider.com/wp-content/uploads/2016/01/product-slider.png" },
    { title:"Product 2", link:"/product/2", imgUrl:"https://avartanslider.com/wp-content/uploads/2016/01/product-slider.png" },
    { title:"Product 3", link:"/product/3", imgUrl:"https://avartanslider.com/wp-content/uploads/2016/01/product-slider.png" },
  ];
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
