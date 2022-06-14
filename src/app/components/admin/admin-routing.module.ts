import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path:'product',loadChildren:()=>import('./product/product.module').then(res=>res.ProductModule)},
  { path:'order',component:OrderComponent,loadChildren:()=>import('./order/order.module').then(res=>res.OrderModule)}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
