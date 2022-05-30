import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),data:{preload:true} },
  { path: '', redirectTo: '/home' ,pathMatch:'full'},
  { path: 'users', loadChildren: () => import('./users/users.module').then(x => x.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
