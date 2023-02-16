import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductComponent } from './components/list-product/product.component';
import { DetailsProductComponent } from './components/details-product/details-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    FormProductComponent,
    DetailsProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
