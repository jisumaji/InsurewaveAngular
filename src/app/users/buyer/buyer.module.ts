import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule,routes } from './buyer-routing.module';
import { RouterModule } from '@angular/router'
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { DisplayAssetsComponent } from './display-assets/display-assets.component';
import { PaymentsComponent } from './payments/payments.component';
import { BuyerComponent } from './buyer.component';
import { BuyerNavComponent } from './buyer-nav/buyer-nav.component';
import { BuyerHomeComponent } from './buyer-home/buyer-home.component';

@NgModule({
  declarations: [
    BuyerComponent,
    AddAssetsComponent,
    DisplayAssetsComponent,
    PaymentsComponent,
    BuyerNavComponent,
    BuyerHomeComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class BuyerModule { }
