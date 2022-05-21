import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { HomePorductsComponent } from './home-porducts/home-porducts.component';
import { AddPorductsComponent } from './add-porducts/add-porducts.component';


@NgModule({
  declarations: [
    HomePorductsComponent,
    AddPorductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
