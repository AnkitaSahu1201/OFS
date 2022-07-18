import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { CustomershoppingComponent } from './customershopping/customershopping.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CartComponent,
    CustomershoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
