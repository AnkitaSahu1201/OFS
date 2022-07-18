import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
<<<<<<< HEAD
import { AddressComponent } from './address/address.component';
import { AccountComponent } from './account/account.component';
=======
import { CartComponent } from './cart/cart.component';
>>>>>>> 115493810c8ece9fb7bae0210cb371df9a8ace1e

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
<<<<<<< HEAD
    AddressComponent,
    AccountComponent
=======
    CartComponent
>>>>>>> 115493810c8ece9fb7bae0210cb371df9a8ace1e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
