import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductComponent } from './components/list-product/product.component';


const routes: Routes = [
  { path: '', component:ProductComponent},
  { path: 'add', component: AddEditProductComponent},
  { path: 'edit/:id', component: AddEditProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
