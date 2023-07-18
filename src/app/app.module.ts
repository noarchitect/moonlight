import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { HairdressersComponent } from './hairdressers/hairdressers.component';
import { HairdresserComponent } from './hairdressers/hairdresser/hairdresser.component';
import { HairdresserinfoComponent } from './hairdresserinfo/hairdresserinfo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabsComponent,
    HairdressersComponent,
    HairdresserComponent,
    HairdresserinfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
