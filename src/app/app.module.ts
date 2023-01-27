import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';
// import { NewProdComponent } from './newProduct/new-prod/new-prod.component';
// import { AppleComponent } from './newProduct/apple/apple.component';
// import { TvComponent } from './newProduct/tv/tv.component';
// import { WatchComponent } from './newProduct/watch/watch.component';
// import { AdminComponent } from './admin/admin/admin.component';
// import { ProductModule } from './product/product.module';
// import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    // NewProdComponent,
    // AppleComponent,
    // TvComponent,
    // WatchComponent,
    // AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // ProductModule,
    // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
