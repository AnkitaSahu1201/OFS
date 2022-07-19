import { Component, OnInit } from '@angular/core';
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
  constructor(private service:FurnitureManagementService,private shoppingService:CustomershoppingService) { }

  ngOnInit() {
    this.service.getAllFurnitures().subscribe(f=>this.furnitures=f);
    console.log(this.furnitures);
  }

  addToCart(furniture:Furniture):any{
    this.shoppingService.addToCart(this.cartId,furniture).subscribe(f=>this.furniture=f);
  }
}
