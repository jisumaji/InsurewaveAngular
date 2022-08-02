import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerComponent } from './broker/broker.component';
import { BuyerComponent } from './buyer/buyer.component';
import { Error404Component } from './error404/error404.component';
import { InsurerComponent } from './insurer/insurer.component';

export const routes: Routes = [
  // {path:'buyer',component:BuyerComponent},
  {path:'buyer',loadChildren:()=>import('./buyer/buyer.module').then(m=>m.BuyerModule)},
  // {path:'broker',component:BrokerComponent},
  {path:'broker',loadChildren:()=>import('./broker/broker.module').then(m=>m.BrokerModule)},
  {path:'insurer',component:InsurerComponent},
  {path:'404',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
