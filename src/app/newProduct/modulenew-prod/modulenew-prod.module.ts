import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProdComponent } from '../new-prod/new-prod.component';
import { RouterModule, Routes } from '@angular/router';
import { AppleComponent } from '../apple/apple.component';
import { TvComponent } from '../tv/tv.component';
import { WatchComponent } from '../watch/watch.component';

const routes : Routes =[
  {
    path : '',component : NewProdComponent,
    children : [
      {
        path : '', redirectTo : 'apple' , pathMatch: 'full'
      },
      {
        path: 'apple', component: AppleComponent
      },
      {
        path: 'tv', component: TvComponent
      },
      {
        path : 'watch' , component : WatchComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    NewProdComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModulenewProdModule {
  constructor(){
    console.log('new product is loaded');
    
  }
 }
