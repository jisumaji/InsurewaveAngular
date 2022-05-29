import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerComponent } from './broker/broker.component';
import { BuyerComponent } from './buyer/buyer.component';
import { InsurerComponent } from './insurer/insurer.component';

const routes: Routes = [
  {path:'buyer',component:BuyerComponent},
  {path:'broker',component:BrokerComponent},
  {path:'insurer',component:InsurerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
