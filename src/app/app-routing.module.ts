import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './home/login/forgot-password/forgot-password.component';
import { LoginComponent } from './home/login/login.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'privacy',component:PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
