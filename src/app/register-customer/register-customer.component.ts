import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  username:string;
  password:string;
  role:string;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  register():any{
    this.route.navigate(["/fillData",this.username,this.password,this.role]);
  }
}
