import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './components/shared/shared.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { ForgetPasswordComponent } from './modules/forget-password/forget-password.component';
import { GlobalComponent } from './components/auth-global/global.component';
import { ProductCardComponent } from './modules/home/components/product-card/product-card.component';
import { EventBannerComponent } from './modules/home/components/event-banner/event-banner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotPermitedComponent } from './components/not-permited/not-permited.component';

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
    ProductCardComponent,
    EventBannerComponent,
    GlobalComponent,
    NotificationComponent,
    NotFoundComponent,
    NotPermitedComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
