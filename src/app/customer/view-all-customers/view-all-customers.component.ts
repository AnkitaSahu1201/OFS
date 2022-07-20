import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/Customer';
import { User } from 'src/app/model/User';
import { ReportService } from 'src/app/report.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {
  
  public cust:Customer[]=[];
  
  
  constructor(private rs:ReportService) { }

  ngOnInit() {
    this.ViewAll();
  }
 
  ViewAll():void{

  this.rs.getAllCustomers().subscribe((a) => this.cust= a.filter(e=>{return e.role!="Admin"}));
  }

}
 



