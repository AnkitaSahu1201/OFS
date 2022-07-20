import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  check:Boolean=true;
  public order:Order=new Order();
  constructor() { }

  ngOnInit(): void {
  }
  cod():void{
    this.check=!this.check;
  }
  placeOrder():any{
    this.order.orderDate=new Date();
    this.order.status="Undelievered";
  }
}
