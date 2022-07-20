import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
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

  constructor(private h:OrderService) { }

  ngOnInit(): void {
    this.undelivered();
  }
  delivered():void{
    // this.d=this.order.status.match("Delivered");
    this.h.getOrderByStatus("Delivered").subscribe((r)=>{this.del=r,this.d=true});
    
  }
  undelivered():void{
    this.h.getOrderByStatus("Undelivered").subscribe((r)=>{this.del=r,this.d=true});
  }
  
}