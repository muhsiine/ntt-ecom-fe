import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalLayoutComponent } from '@layouts/global-layout/global-layout.component';
import { AboutComponent } from '@modules/pages/about/about.component';
import { ContactUsComponent } from '@modules/pages/contact-us/contact-us.component';
import { ForgetPasswordComponent } from '@modules/pages/forget-password/forget-password.component';
import { LoginComponent } from '@modules/pages/login/login.component';
import { NotFoundComponent } from '@modules/pages/not-found/not-found.component';
import { NotPermitedComponent } from '@modules/pages/not-permited/not-permited.component';
import { RegisterComponent } from '@modules/pages/register/register.component';
import { ProfileComponent } from '@modules/profile/profile.component';

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { NotPermitedComponent } from './components/error/not-permited/not-permited.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { HomeTemplateComponent } from './components/home-template/home-template.component';

const routes: Routes = [
  { path: '', component: GlobalLayoutComponent, loadChildren:()=>import('@modules/pages/pages.module').then(res=>res.PagesModule) },
  { path: 'product', component: GlobalLayoutComponent, loadChildren:()=>import('@modules/product/product.module').then(res=>res.ProductModule) },
  { path: 'order', component: GlobalLayoutComponent, loadChildren:()=>import('@modules/order/order.module').then(res=>res.OrderModule) },
  { path: 'cart', component: GlobalLayoutComponent, loadChildren:()=>import('@modules/cart/cart.module').then(res=>res.CartModule) },
    { path: 'profile', component: GlobalLayoutComponent, loadChildren: () => import('@modules/profile/profile.module').then(res=>res.CartModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'access', component: NotPermitedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution:'corrected'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
