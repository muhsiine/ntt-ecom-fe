  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { AdminSidebarComponent } from './components/shared/admin-sidebar/admin-sidebar.component';
import { GlobalComponent } from './components/auth/global/global.component';
import { ProductCardComponent } from './components/home/home/product-card/product-card.component';
import { EventBannerComponent } from './components/home/home/event-banner/event-banner.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './components/home/home/home.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core/public_api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    AdminSidebarComponent,
    GlobalComponent,
    AdminSidebarComponent,
    ProductCardComponent,
    EventBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
