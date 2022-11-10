import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path: 'contact', component:ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
