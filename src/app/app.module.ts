import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShoesMainComponent } from './shoes-main/shoes-main.component';
import { ClothesComponent } from './clothes/clothes.component';
import { BrandsComponent } from './brands/brands.component';
import { SalesComponent } from './sales/sales.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShopBasketComponent } from './shop-basket/shop-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AboutUsComponent,
    ShopComponent,
    ContactComponent,
    GalleryComponent,
    ShoesMainComponent,
    ClothesComponent,
    BrandsComponent,
    SalesComponent,
    AccessoriesComponent,
    ShopBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
