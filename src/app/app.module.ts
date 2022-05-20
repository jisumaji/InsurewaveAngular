import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { ForgotPasswordComponent } from './home/login/forgot-password/forgot-password.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BrokerComponent } from './broker/broker.component';
import { InsurerComponent } from './insurer/insurer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PrivacyComponent,
    ForgotPasswordComponent,
    BuyerComponent,
    BrokerComponent,
    InsurerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
