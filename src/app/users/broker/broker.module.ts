import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerRoutingModule, routes } from './broker-routing.module';
import { RouterModule } from '@angular/router';
import { PoliciesComponent } from './policies/policies.component';
import { RequestsComponent } from './requests/requests.component';
import { BrokerComponent } from './broker.component';
import { BrokerHomeComponent } from './broker-home/broker-home.component';
import { BrokerNavComponent } from './broker-nav/broker-nav.component';


@NgModule({
  declarations: [
    PoliciesComponent,
    RequestsComponent,
    BrokerComponent,
    BrokerHomeComponent,
    BrokerNavComponent
  ],
  imports: [
    CommonModule,
    BrokerRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class BrokerModule { }
