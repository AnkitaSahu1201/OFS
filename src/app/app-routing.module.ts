import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurnitureManagementComponent } from './furniture-management/furniture-management.component';
import { LoginComponent } from './login/login.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
