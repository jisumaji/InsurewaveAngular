import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import {DisplayAssetsComponent} from './display-assets/display-assets.component'
import { PaymentsComponent } from './payments/payments.component';
import {BuyerHomeComponent} from'./buyer-home/buyer-home.component'

export const routes: Routes = [
  {path:'',component:BuyerHomeComponent},
  {path:'add',component:AddAssetsComponent,},
  {path:'assets',component:DisplayAssetsComponent},
  {path:'payment',component:PaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
