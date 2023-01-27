import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { TabsComponent } from './tabs/tabs.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
 {
  path : '', component : ProductsComponent ,
  children :  [
  {
    path : '', redirectTo : 'laptop',pathMatch : 'full'
  },
  {
    path : 'laptop' , component : LaptopsComponent,
  },
  {
    path : 'mobile' , component : MobilesComponent,
  },
  {
    path : 'tab' , component : TabsComponent,
  }
]
 }

]

@NgModule({
  declarations: [
    ProductsComponent,
    TabsComponent,
    MobilesComponent,
    LaptopsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { 
  constructor(){
    console.log('Product is Module loaded');
    
  }
}
