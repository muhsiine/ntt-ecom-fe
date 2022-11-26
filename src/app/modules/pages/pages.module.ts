import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotPermitedComponent } from './not-permited/not-permited.component';
import { SharedModule } from '@modules/shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NotFoundComponent,
    NotPermitedComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
