import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { RecriuterComponent } from './recriuter/recriuter.component';
import { UsersComponent } from './users/users.component';


const routes : Routes =[
  {
    path: '' , component : AdminComponent,
    children : [
      {
        path : '', redirectTo : 'sadmin', pathMatch : 'full' 
      },
      {
        path : 'sadmin', component : SuperAdminComponent
      },
      {
        path : 'recruiter', component: RecriuterComponent
      },
      {
        path : 'users', component : UsersComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { 
  constructor(){
    console.log('Admin is Module loaded');
    
  }
}
