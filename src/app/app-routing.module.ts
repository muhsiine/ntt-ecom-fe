import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './modules/forget-password/forget-password.component';

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { NotPermitedComponent } from './components/error/not-permited/not-permited.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { HomeTemplateComponent } from './components/home-template/home-template.component';

const routes: Routes = [
  { path: '', component: HomeTemplateComponent, loadChildren:()=>import('./modules/home/home.module').then(res=>res.HomeModule) },
  { path: 'login', component:LoginComponent },
  { path: 'product', component: HomeTemplateComponent, loadChildren:()=>import('./modules/product/product.module').then(res=>res.ProductModule) },
  { path: 'order', component: HomeTemplateComponent, loadChildren:()=>import('./modules/order/order.module').then(res=>res.OrderModule) },
  { path: 'register', component:RegisterComponent },
  { path: 'forgot-password', component:ForgetPasswordComponent },
  { path: 'not-permited', component:NotPermitedComponent },
  { path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution:'corrected'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }