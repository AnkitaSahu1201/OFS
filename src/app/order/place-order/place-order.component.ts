import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Cart } from 'src/app/model/Cart';
import { Furniture } from 'src/app/model/Furniture';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
public cost:number;
public furnitures:Furniture[]=[];
public cart:Cart = new Cart();
cartId:number;
  constructor(private service:CartService,private r:Router) { 
   this.cartId=parseInt(sessionStorage.getItem("cartId"));
  }

  ngOnInit(): void {
    this.service.getAllCartsById(this.cartId).subscribe(c=>{
      this.furnitures=c.furnitures;
      this.cart=c;
      console.log(this.cart);
      this.cost=this.furnitures.map(a=>{
        return a.price;
        
      }).reduce((a,b)=>{
        return a+b;
      })
    });
    
  }
 proceed():void{
  this.r.navigate(["/payment"])
 }
}
