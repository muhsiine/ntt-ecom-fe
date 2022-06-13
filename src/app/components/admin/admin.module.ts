import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminSidebarComponent } from '../shared/admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
