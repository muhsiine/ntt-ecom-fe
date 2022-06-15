import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeLangComponent } from './mode-lang/mode-lang.component';
import { FormsModule } from '@angular/forms';
import { DataNotFoundComponent } from './data-not-found/data-not-found.component';



@NgModule({
  declarations: [
    ModeLangComponent,
    DataNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ModeLangComponent,
    DataNotFoundComponent
  ]
})
export class SharedModule { }
