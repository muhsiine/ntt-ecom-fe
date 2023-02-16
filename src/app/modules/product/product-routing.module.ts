import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductComponent } from './components/list-product/product.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';


const routes: Routes = [
  { path:'',component:ProductComponent},
  { path:'add',component:FormProductComponent},
  {path:'edit/:id',component:FormProductComponent},
  { path:'details',component:DetailsProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
