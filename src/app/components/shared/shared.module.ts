import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeLangComponent } from './mode-lang/mode-lang.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModeLangComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ModeLangComponent
  ]
})
export class SharedModule { }
