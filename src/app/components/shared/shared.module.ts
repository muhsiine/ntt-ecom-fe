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
import { AdminSidebarComponent } from '@components/admin-sidebar/admin-sidebar.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ModeLangComponent,
    DataNotFoundComponent,
    AdminSidebarComponent,
    LoaderComponent
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
    ModeLangComponent,
    DataNotFoundComponent,
    TranslateModule,
    FormsModule,
    LoaderComponent,
    ReactiveFormsModule,
    AdminSidebarComponent
  ]
})
export class SharedModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}