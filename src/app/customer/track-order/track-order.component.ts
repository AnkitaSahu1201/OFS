import { Component, OnInit } from '@angular/core';
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

  constructor(private h:OrderService,private rs:ReportService) { }

  ngOnInit(): void {
    this.customerId=parseInt(sessionStorage.getItem("userId"));
    this.rs.getAllCustomers().subscribe(a=>this.custList=a);
    for(let i=0;i<this.custList.length;i++){
      if(this.customerId==this.custList[i].uid){
        this.cust=this.custList[i];
      }
    }
    console.log(this.cust);
    this.undelivered();
  }
  delivered():void{
    for(let i=0;i<this.cust.orders.length;i++){
      this.del=this.cust.orders.filter(o=>{
        return o.status="Delivered";
      })
    }
    
  }
  undelivered():void{
    for(let i=0;i<this.cust.orders.length;i++){
      this.del=this.cust.orders.filter(o=>{
        return o.status="Undelievered";
      })
    }
  }
 
    
  
  
}
