import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
=======
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
>>>>>>> c7dd3fff938f7ce52007ae67703662c4d9184826

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
<<<<<<< HEAD
    CartComponent
=======
    CustomerfeedbackComponent
>>>>>>> c7dd3fff938f7ce52007ae67703662c4d9184826
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
