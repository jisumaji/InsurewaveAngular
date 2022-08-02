import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule,routes } from './users-routing.module';
import { Error404Component } from './error404/error404.component';
import { PolicyComponent } from './insurer/policy/policy.component';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    Error404Component,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
