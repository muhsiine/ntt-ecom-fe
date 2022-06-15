import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './modules/forget-password/forget-password.component';

import { HomeComponent } from './modules/home/components/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { NotPermitedComponent } from './components/not-permited/not-permited.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'forgot-password', component:ForgetPasswordComponent },
  { path: 'admin', component:AdminComponent, loadChildren:()=>import('./modules/admin/admin.module').then(res=>res.AdminModule) },
  { path: 'not-permited', component:NotPermitedComponent },
  { path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution:'corrected'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }