import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/component/about/about.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './shared/component/home/home.component';

const routes: Routes = [
  {
    path : '', redirectTo :'home', pathMatch: 'full'
  },
  {
    path : 'home', component : HomeComponent,
  },
  {
    path : 'about', component : AboutComponent,
  },
  {
    path : 'admin', loadChildren : () => import('./admin/admin.module').then((m) => m.AdminModule)
      
    },
  
  {
    path : 'products', loadChildren : () => import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'newProd', loadChildren : () => import('./newProduct/modulenew-prod/modulenew-prod.module').then((m) => m.ModulenewProdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
