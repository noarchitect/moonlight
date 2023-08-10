import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StylistsComponent } from './stylists/stylists.component';
import { ServicesComponent } from './services/services.component';
import { BuyProductsComponent } from './buy-products/buy-products.component';
import { BooknowComponent } from './booknow/booknow.component';
import { LocationsComponent } from './locations/locations.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { MoonlightComponent } from './moonlight/moonlight.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'stylists', component: StylistsComponent},
  { path: 'buyproducts', component: BuyProductsComponent},
  { path: 'booknow', component: BooknowComponent},
  { path: 'moonlight', component: MoonlightComponent},
  { path: 'locations', component: LocationsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'cart', component: CartComponent},
  { path: '', component: MoonlightComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }