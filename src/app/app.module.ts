import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FurnitureManagementComponent } from './furniture-management/furniture-management.component';
import { OrderCancellationComponent } from './order-cancellation/order-cancellation.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    FurnitureManagementComponent,
    OrderCancellationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
