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
  public customer:Customer=new Customer();
  username:string;
  password:string;
  role:string;
  constructor(private service:CustomerService,private r:Router) { }

  ngOnInit(): void {
  }

  login():any{
    console.log(this.username,this.password,this.role);
    this.service.loginUser(this.username,this.password,this.role).subscribe(b=>{
     if (b){
        this.r.navigate(["/viewAllFurnitures"]);
      }
    },(err: Response) => {
      if (err['error'].errorMessage != 'undefined') {
        console.log(err['error'].errorMessage);
        alert(err['error'].errorMessage);
        this.r.navigate(["/registerUser"]);
      }

    })
  }

  register():any{
    this.r.navigate(["/registerUser"]);
  }
}
