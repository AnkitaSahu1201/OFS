import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomershoppingService } from '../customershopping/customershopping.service';
import { Furniture } from '../model/Furniture';
import { FurnitureManagementService } from './furniture-management.service';

@Component({
  selector: 'app-furniture-management',
  templateUrl: './furniture-management.component.html',
  styleUrls: ['./furniture-management.component.css']
})
export class FurnitureManagementComponent implements OnInit {
  public furnitures:Furniture[]=[];
  public furniture:Furniture;
  cartId:number;
  constructor(private service:FurnitureManagementService,private shoppingService:CustomershoppingService, private route:Router) { 
    this.cartId=parseInt(sessionStorage.getItem("cartId"));
  }

  ngOnInit() {
    this.service.getAllFurnitures().subscribe(f=>this.furnitures=f);
    console.log(this.cartId);
  }

  addToCart(furniture:Furniture):any{
    this.shoppingService.addToCart(this.cartId,furniture).subscribe(f=>this.furniture=f);
    alert("Item added successfully!!")
  }
  review(furniture:Furniture):any{
    this.route.navigate(["/viewReviews",furniture.furnitureId]);
  }
  addReview(furniture:Furniture):any{
    this.route.navigate(["/addReviews",furniture.furnitureId]);
  }
}
