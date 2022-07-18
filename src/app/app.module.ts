import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FurnitureManagementComponent } from './furniture-management/furniture-management.component';
<<<<<<< HEAD
import { CustomerComponent } from './customer/customer.component';
=======
import { OrderCancellationComponent } from './order-cancellation/order-cancellation.component';
>>>>>>> 39fb66ed184f17e9238024586eff9b9e86fcf97e

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    FurnitureManagementComponent,
<<<<<<< HEAD
    CustomerComponent
=======
    OrderCancellationComponent
>>>>>>> 39fb66ed184f17e9238024586eff9b9e86fcf97e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
