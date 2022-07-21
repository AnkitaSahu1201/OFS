import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/Customer';
import { ReportService } from 'src/app/report.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  public address:Address=new Address();
  public cust:Customer=new Customer();
  public custId:number;
  constructor(private service:CustomerService,private rs:ReportService,private r:Router,private location:Location) { 
    this.custId=parseInt(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
    this.rs.getAllCustomers().subscribe(a=>{
      this.cust=a.filter((c)=>{return c.uid==this.custId})[0];
     
    })
  }

  submit():void{
    
    this.service.updateUser(this.cust).subscribe(a=>this.cust=a);
    this.r.navigate(["/viewAllFurnitures"]);
  }
  back():void{
    this.location.back();
  }

}
