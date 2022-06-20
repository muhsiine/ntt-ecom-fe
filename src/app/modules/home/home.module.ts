import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    CarouselComponent, 
    CategoryCardComponent,
    HomeComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [CarouselComponent]
})
export class HomeModule { }
