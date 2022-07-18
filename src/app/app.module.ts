import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
import { CustomershoppingComponent } from './customershopping/customershopping.component';
=======
import { AddressComponent } from './address/address.component';
import { AccountComponent } from './account/account.component';
>>>>>>> 7e93988e739d6e5145ca888f6edc58fa43a603d4

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
<<<<<<< HEAD
    CartComponent,
    CustomershoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    AddressComponent,
    AccountComponent
>>>>>>> 7e93988e739d6e5145ca888f6edc58fa43a603d4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
