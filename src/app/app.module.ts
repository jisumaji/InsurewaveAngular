import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { ForgotPasswordComponent } from './home/login/forgot-password/forgot-password.component';
import { BuyerComponent } from './users/buyer/buyer.component';
import { BrokerComponent } from './users/broker/broker.component';
import { InsurerComponent } from './users/insurer/insurer.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
