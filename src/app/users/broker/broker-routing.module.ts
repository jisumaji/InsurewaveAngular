import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerHomeComponent } from './broker-home/broker-home.component';
import { BrokerComponent } from './broker.component';
import { PoliciesComponent } from './policies/policies.component';
import { RequestsComponent } from './requests/requests.component';

export const routes: Routes = [
  // {path:'',component:BrokerComponent},
  // {path:'home',component:BrokerHomeComponent},
  // {path:'policies',component:PoliciesComponent},
  // {path:'requests',component:RequestsComponent}
  {
    path: '', component: BrokerComponent,
    children: [
      { path: '', redirectTo:'home',pathMatch:'full' },
      { path: 'home', component: BrokerHomeComponent },
      { path: 'policies', component: PoliciesComponent },
      { path: 'requests', component: RequestsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerRoutingModule { }
