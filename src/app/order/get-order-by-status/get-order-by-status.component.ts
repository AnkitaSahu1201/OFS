import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { ReportService } from 'src/app/report.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-get-order-by-status',
  templateUrl: './get-order-by-status.component.html',
  styleUrls: ['./get-order-by-status.component.css']
})
export class GetOrderByStatusComponent implements OnInit {
  public del:Order[]=[];
  public undel:Order[]=[];
  d:boolean=false;
  public order:Order=new Order();
  
  constructor(private h:OrderService,private rs:ReportService,private r : Router) { }

  ngOnInit(): void {
    this.rs.getAllOrders().subscribe(o=>this.del=o);
  }
  delivered():void{
    // this.d=this.order.status.match("Delivered");
    this.h.getOrderByStatus("Delivered").subscribe((r)=>{this.del=r},(err:Response)=>{
      if(err['error'].errorMessage!='undefined')
        alert(err['error'].errorMessage);
    });
    
  }
  undelivered():void{
    this.h.getOrderByStatus("Undelievered").subscribe((r)=>{this.del=r},(err:Response)=>{
      if(err['error'].errorMessage!='undefined')
        alert(err['error'].errorMessage);
    });
  }
  updateStatus(orderId:number):any{
    this.h.getOrderById(orderId).subscribe(o=>{this.order=o
      o.status="Delivered";
     // console.log(o);
      this.h.updateOrder(o).subscribe(o=>this.order=o);
    });
    window.location.reload();
    
  }
  viewDetails(orderId:number):any{
      this.r.navigate(["/viewOrderDetail",orderId]);
  }
  
}
