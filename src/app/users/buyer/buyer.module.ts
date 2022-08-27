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
import { BuyerService } from '../../services/buyer.service';
import { EditAssetComponent } from './edit-asset/edit-asset.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteAssetComponent } from './delete-asset/delete-asset.component';

@NgModule({
  declarations: [
    BuyerComponent,
    AddAssetsComponent,
    DisplayAssetsComponent,
    PaymentsComponent,
    BuyerNavComponent,
    BuyerHomeComponent,
    EditAssetComponent,
    DeleteAssetComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[BuyerService]
})
export class BuyerModule { }
