import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AppComponent } from './app.component';
import { NotificationComponent } from '@modules/helpers/notification/notification.component';
import { GlobalLayoutComponent } from '@layouts/global-layout/global-layout.component';
import { AdminSidebarComponent } from '@layouts/global-layout/admin-sidebar/admin-sidebar.component';
import { FooterComponent } from '@layouts/global-layout/footer/footer.component';
import { SharedModule } from '@modules/shared/shared.module';
import { NavbarComponent } from '@layouts/global-layout/navbar/navbar.component';
import { SidebarComponent } from '@layouts/global-layout/sidebar/sidebar.component';
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from '@modules/pages/register/register.component';
import { ForgetPasswordComponent } from '@modules/pages/forget-password/forget-password.component';
import { LoginComponent } from '@modules/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AdminSidebarComponent,
    GlobalLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgxIntlTelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }