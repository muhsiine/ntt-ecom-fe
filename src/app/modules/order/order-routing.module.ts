import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './components/list-order/order.component';

const routes: Routes = [
  { path:'',component:OrderComponent},
  { path:'add',component:OrderComponent},
  {path:'edit/:id',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
