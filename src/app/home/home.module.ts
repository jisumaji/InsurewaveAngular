import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, routes } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    LoginComponent,
    PrivacyComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class HomeModule { }
