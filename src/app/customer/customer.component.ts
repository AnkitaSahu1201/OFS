import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../model/address';
import { Customer } from '../model/Customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public address:Address=new Address();
  public cust:Customer=new Customer();
  constructor(private service:CustomerService,private r:ActivatedRoute) {
    this.cust.username=this.r.snapshot.paramMap.get("username");
    this.cust.password=this.r.snapshot.paramMap.get("password");
    this.cust.role=this.r.snapshot.paramMap.get("role");
  }

  ngOnInit(): void {
  }

  submit():any{
    this.cust.addresses.push(this.address);
    console.log(this.cust);
    this.service.registerNewUser(this.cust).subscribe(a=>this.cust=a);
  }
}

