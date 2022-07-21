import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
public order:Order=new Order();
public orderId:number;
public cost:number;
  constructor(private os:OrderService,private r:ActivatedRoute,private l:Location) {
    this.orderId=parseInt(this.r.snapshot.paramMap.get("id"));
   }

  ngOnInit(): void {
    this.os.getOrderById(this.orderId).subscribe(o=>{
      this.order=o
      this.cost=this.order.furniture.map(a=>{
        return a.price;
        
      }).reduce((a,b)=>{
        return a+b;
      })
    });
    
  }
  back():any{
    this.l.back();
  }

}
