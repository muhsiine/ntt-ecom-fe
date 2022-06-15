import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';

@NgModule({
  declarations: [CarouselComponent, CategoryCardComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [CarouselComponent]
})
export class HomeModule { }
