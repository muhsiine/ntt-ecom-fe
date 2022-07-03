import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from '@modules/home/home.module';
import { SharedModule } from '@components/shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from '@modules/login/login.component';
import { RegisterComponent } from '@modules/register/register.component';
import { ForgetPasswordComponent } from '@modules/forget-password/forget-password.component';
import { GlobalComponent } from '@components/auth-global/global.component';
import { NotificationComponent } from '@components/notification/notification.component';
import { NotFoundComponent } from '@components/error/not-found/not-found.component';
import { NotPermitedComponent } from '@components/error/not-permited/not-permited.component';
import { HomeTemplateComponent } from '@components/home-template/home-template.component';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    GlobalComponent,
    NotificationComponent,
    NotFoundComponent,
    NotPermitedComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HomeTemplateComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }