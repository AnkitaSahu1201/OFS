import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Cart } from 'src/app/model/Cart';
import { Furniture } from 'src/app/model/Furniture';

@Component({
  selector: 'app-view-furniture-by-cart',
  templateUrl: './view-furniture-by-cart.component.html',
  styleUrls: ['./view-furniture-by-cart.component.css']
})
export class ViewFurnitureByCartComponent implements OnInit {
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
      
    });
    
  }
  remove(furniture:Furniture):any{
    this.cart.furnitures=this.cart.furnitures.filter(f=>{
      return f!=furniture;
    })
    this.service.updateCart(this.cart).subscribe(c=>this.cart=c);
    window.location.reload();
  }

  continue():void{
    this.r.navigate(["/viewAllFurnitures"]);
  }

  placeOrder():void{
    this.r.navigate(["/placeOrder"]);
  }
}
