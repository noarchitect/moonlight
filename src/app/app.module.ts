import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StylistsComponent } from './stylists/stylists.component';
import { AboutComponent } from './about/about.component';
import { BuyProductsComponent } from './buy-products/buy-products.component';
import { BooknowComponent } from './booknow/booknow.component';
import { MoonlightComponent } from './moonlight/moonlight.component';
import { LocationsComponent } from './locations/locations.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StylistsComponent,
    AboutComponent,
    BuyProductsComponent,
    BooknowComponent,
    MoonlightComponent,
    LocationsComponent,
    ServicesComponent,
    ProfileComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
