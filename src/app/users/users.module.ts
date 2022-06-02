import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { Error404Component } from './error404/error404.component';
import { AddAssetsComponent } from './buyer/add-assets/add-assets.component';
import { DisplayAssetsComponent } from './buyer/display-assets/display-assets.component';
import { PaymentsComponent } from './buyer/payments/payments.component';
import { RequestsComponent } from './broker/requests/requests.component';
import { PoliciesComponent } from './broker/policies/policies.component';
import { PolicyComponent } from './insurer/policy/policy.component';


@NgModule({
  declarations: [
    Error404Component,
    AddAssetsComponent,
    DisplayAssetsComponent,
    PaymentsComponent,
    RequestsComponent,
    PoliciesComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
