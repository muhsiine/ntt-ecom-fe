import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductComponent } from './list-product/product.component';


const routes: Routes = [
  { path:'',component:ProductComponent},
  { path:'add',component:FormProductComponent},
  {path:'edit/:id',component:FormProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
