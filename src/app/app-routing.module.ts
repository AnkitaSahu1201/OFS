import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { AddressComponent } from './address/address.component';
import { UpdateAddressComponent } from './address/update-address/update-address.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { TrackOrderComponent } from './customer/track-order/track-order.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ViewAllCustomersComponent } from './customer/view-all-customers/view-all-customers.component';
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
import { ViewAllFeedbackComponent } from './customerfeedback/view-all-feedback/view-all-feedback.component';
import { AddfurnitureComponent } from './furniture-management/addfurniture/addfurniture.component';
import { FurnitureManagementComponent } from './furniture-management/furniture-management.component';
import { UpdateFurnitureComponent } from './furniture-management/update-furniture/update-furniture.component';
import { ViewFurnitureByCartComponent } from './furniture-management/view-furniture-by-cart/view-furniture-by-cart.component';
import { LoginComponent } from './login/login.component';
import { GetOrderByStatusComponent } from './order/get-order-by-status/get-order-by-status.component';
import { PlaceOrderComponent } from './order/place-order/place-order.component';
import { ViewOrderDetailsComponent } from './order/view-order-details/view-order-details.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"viewAllFurnitures",
    component:FurnitureManagementComponent
  },
  {
    path:"registerUser",
    component:RegisterCustomerComponent
  },
  {
    path:"fillData/:username/:password/:role",
    component:CustomerComponent
  },
  {
    path:"ViewFurniture",
    component:ViewFurnitureByCartComponent
  },
  {
    path:"viewReviews/:Id",
    component:ViewAllFeedbackComponent
  },
  {
    path:"addReviews/:Id",
    component:CustomerfeedbackComponent
  },
  {
    path:"adminPage",
    component:AdminComponent
  },
  {
    path:"updateFurniture/:Id",
    component:UpdateFurnitureComponent
  },
  {
    path:"addFurniture",
    component:AddfurnitureComponent
  },
  {
    path:"viewOrderByStatus",
    component:GetOrderByStatusComponent
  },
  {
    path:"getAllCustomer",
    component:ViewAllCustomersComponent
  },
  {
    path:"placeOrder",
    component:PlaceOrderComponent
  },
  {
    path:"payment",
    component:PaymentComponent
  },
  {
    path:"trackOrder",
    component:TrackOrderComponent
  },
  {
    path:"update",
    component:UpdateCustomerComponent
  },
  {
    path:"updateAddress/:id",
    component:UpdateAddressComponent
  },
  {
    path:"viewAddress",
    component:AddressComponent
  },
  {
    path:"addAddress",
    component:AddAddressComponent
  },
  {
    path:"viewOrderDetail/:id",
    component:ViewOrderDetailsComponent
  },
  {
    path:"about",
    component:AboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
