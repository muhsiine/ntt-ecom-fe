import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { SliderCardComponent } from './components/slider-card/slider-card.component';
import { SliderBannerComponent } from './components/slider-banner/slider-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    SliderCardComponent,
    SliderBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule { }
