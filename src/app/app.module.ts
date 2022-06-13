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
import { GlobalComponent } from './components/auth/global/global.component';
import { ProductCardComponent } from './components/home/home/product-card/product-card.component';
import { EventBannerComponent } from './components/home/home/event-banner/event-banner.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './components/home/home/home.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NotificationComponent } from './components/shared/notification/notification.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { NotPermitedComponent } from './components/shared/not-permited/not-permited.component';
import { DataNotFoundComponent } from './components/shared/data-not-found/data-not-found.component';


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
    NotPermitedComponent,
    DataNotFoundComponent
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

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
