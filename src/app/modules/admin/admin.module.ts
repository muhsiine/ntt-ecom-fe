import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { SharedModule } from '../../components/shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
