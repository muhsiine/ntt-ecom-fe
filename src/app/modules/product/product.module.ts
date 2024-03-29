import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductComponent } from './components/list-product/product.component';
import { ListProductDetailsComponent } from './components/list-product-details/list-product-details.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ListProductAdminComponent } from './components/list-product-admin/list-product-admin.component';
import { ListProductGridComponent } from './components/list-product-grid/list-product-grid.component';
import { SharedModule } from '@modules/shared/shared.module';
import { ModalComponent } from '@modules/helpers/modal/modal.component';

@NgModule({
  declarations: [
    ProductComponent,
    AddEditProductComponent,
    ListProductDetailsComponent,
    SearchProductComponent,
    ListProductAdminComponent,
    ListProductGridComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
