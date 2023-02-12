import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component';
import { GlobalLayoutComponent } from '@layouts/global-layout/global-layout.component';
import { NotFoundComponent } from '@modules/pages/not-found/not-found.component';
import { NotPermitedComponent } from '@modules/pages/not-permited/not-permited.component';

const routes: Routes = [
  {
    path: '', component: GlobalLayoutComponent, children: [
      { path: '', loadComponent: () => import('@modules/pages/home/home.component').then(res => res.HomeComponent) },
      { path: 'product', loadChildren: () => import('@modules/product/product.module').then(res => res.ProductModule) },
      { path: 'order', loadChildren: () => import('@modules/order/order.module').then(res => res.OrderModule) },
      { path: 'cart', loadChildren: () => import('@modules/cart/cart.module').then(res => res.CartModule) },
      { path: 'profile', loadComponent: () => import('@modules/profile/profile.component').then(res => res.ProfileComponent) },
      { path: 'about', loadComponent: () => import('@modules/pages/about/about.component').then(res => res.AboutComponent) },
      { path: 'contact', loadComponent: () => import('@modules/pages/contact-us/contact-us.component').then(res => res.ContactUsComponent) }
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', loadComponent: () => import('@modules/pages/login/login.component').then(res => res.LoginComponent) },
      { path: 'register', loadComponent: () => import('@modules/pages/register/register.component').then(res => res.RegisterComponent) },
      { path: 'forgot-password', loadComponent: () => import('@modules/pages/forget-password/forget-password.component').then(res => res.ForgetPasswordComponent) },
    ]
  },
  { path: 'access', component: NotPermitedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
