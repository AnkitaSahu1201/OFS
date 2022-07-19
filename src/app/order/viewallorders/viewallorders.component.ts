import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-viewallorders',
  templateUrl: './viewallorders.component.html',
  styleUrls: ['./viewallorders.component.css']
})
export class ViewallordersComponent implements OnInit {

  orders: Order[]=[];

  constructor(private h:OrderService) {
    this.h.getAllOrders().subscribe(a=>this.orders=a)
   }

  ngOnInit(): void {
  }

}
