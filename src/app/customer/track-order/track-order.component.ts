import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/Customer';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/order/order.service';
import { ReportService } from 'src/app/report.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  public del:Order[]=[];
  public undel:Order[]=[];
  public custList:Customer[]=[];
  public cust:Customer=new Customer();
  public customerId:number;
  public order:Order=new Order();
  public oList:Order[]=[];


  constructor(private h:OrderService,private rs:ReportService,private r: Router) { }

  ngOnInit(): void {
    this.customerId=parseInt(sessionStorage.getItem("userId"));
    this.h.getOrderByCustomer(this.customerId).subscribe(a=>this.del=a);
    
    // console.log(this.cust);
    // this.undelivered();
  }
  
  delivered():void{
    this.h.getOrderByCustomer(this.customerId).subscribe(a=>{this.oList=a
      console.log(this.oList);
      for(let i=0;i<this.oList.length;i++){
        this.del=this.oList.filter(o=>{
          return o.status=="Delivered";
        })
      }
      if(this.del.length==0){
        alert("No Order Present with this status!!");
      }
    });
    
    
    
  }
  undelivered():void{
    this.h.getOrderByCustomer(this.customerId).subscribe(a=>{this.oList=a
      console.log(this.oList);
      for(let i=0;i<this.oList.length;i++){
        this.del=this.oList.filter(o=>{
          return o.status=="Undelievered";
        })
      }
      if(this.del.length==0){
        alert("No Order Present with this status!!");
      }
    });
  }
  viewDetails(orderId:number):any{
    this.r.navigate(["/viewOrderDetail",orderId])
  }
    
  
  
}
