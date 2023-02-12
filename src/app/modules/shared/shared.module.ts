import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ModeLangComponent } from './mode-lang/mode-lang.component';
import { DataNotFoundComponent } from './data-not-found/data-not-found.component';
import { LoaderComponent } from './loader/loader.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { SliderBannerComponent } from './slider-banner/slider-banner.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    DataNotFoundComponent,
    LoaderComponent,
    ModeLangComponent,
    ProductCardComponent,
    SliderBannerComponent,
    SliderCardComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    CommonModule,
    ModeLangComponent,
    DataNotFoundComponent,
    ProductCardComponent,
    SliderBannerComponent,
    LoaderComponent,
    SliderCardComponent,
    StepperComponent,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}