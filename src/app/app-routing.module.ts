import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {path:'', redirectTo:'/start', pathMatch:'full'},
  {path:'start', component:StartPageComponent},
  {path:'about', component:AboutUsComponent},
  {path:'shop', component:ShopComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'shop/shoes', component:ShoesMainComponent},
  {path:'shop/clothes', component:ClothesComponent},
  {path:'shop/brands', component:BrandsComponent},
  {path:'shop/sales', component:SalesComponent},
  {path:'shop/accessories', component:AccessoriesComponent},
  {path:'shop/basket', component:ShopBasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
