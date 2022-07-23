import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public cust: Customer = new Customer();
  username: string;
  password: string;
  role: string;
  constructor(private service: CustomerService, private r: Router,private location:LocationStrategy) {
    history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
    history.pushState(null, null, window.location.href);
   });
  }
  ngOnInit(): void {
    
  }

  login(): any {
    console.log(this.username, this.password, this.role);
    this.service.loginUser(this.username, this.password, this.role).subscribe(b => {
      if (b != null) {
        this.cust = b;
        sessionStorage.setItem("userId", this.cust.uid.toString());
        sessionStorage.setItem("userName", this.cust.username);
        sessionStorage.setItem("cartId", this.cust.cart.cartId.toString());
        if (this.cust.role == "Customer")
          this.r.navigate(["/viewAllFurnitures"]);
        else if (this.cust.role == "Admin")
          this.r.navigate(["/adminPage"]);
      }
    }, (err: Response) => {
      if (err['error'].errorMessage != 'undefined') {
        console.log(err['error'].errorMessage);
        alert(err['error'].errorMessage);
        this.r.navigate(["/registerUser"]);
      }

    })
  }

  register(): any {
    this.r.navigate(["/registerUser"]);
  }
}
