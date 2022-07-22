import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { CustomerService } from '../customer/customer.service';
import { CustomershoppingService } from '../customershopping/customershopping.service';
import { Account } from '../model/Account';
import { Bill} from '../model/bill';
import { Card } from '../model/Card';
import { Cart } from '../model/Cart';
import { Customer } from '../model/Customer';
import { Order } from '../model/order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public account:Account=new Account();
  public card:Card=new Card();
  check:Boolean=true;
  public cartId:number;
  public cart:Cart=new Cart();
  public order:Order=new Order();
  public bill:Bill=new Bill(); 
  public customerName:string;
  public customerId:number;
  constructor(private cs:CartService,private custService:CustomerService,private shop:CustomershoppingService,private r:Router) { }

  ngOnInit(): void {
      this.cartId=parseInt(sessionStorage.getItem("cartId"));
      this.cs.getAllCartsById(this.cartId).subscribe(c=>this.cart=c);
      this.customerName=sessionStorage.getItem("userName");
      this.customerId=parseInt(sessionStorage.getItem("userId"));
    
  }
  cod():void{
    this.check=!this.check;
  }
  placeOrder():any{
    this.order.orderDate=new Date();
    this.order.furniture=this.cart.furnitures;
    this.order.quantity=this.cart.furnitures.length;
    this.order.price=this.cart.furnitures.map(a=>{
      return a.price;
      
    }).reduce((a,b)=>{
      return a+b;
    })
    this.order.status="Undelievered";
    this.bill.customerName=this.customerName;
    this.bill.quantity=this.cart.furnitures.length;
    this.bill.price=this.order.price;
    this.order.bill=this.bill;
    console.log(this.order);
    this.shop.placeOrder(this.customerId,this.order).subscribe(o=>this.order=o);
    this.r.navigate(["/viewAllFurnitures"]);
  }
}
