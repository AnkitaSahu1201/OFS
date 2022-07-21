import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomershoppingService } from '../customershopping/customershopping.service';
import { FurnitureManagementService } from '../furniture-management/furniture-management.service';
import { Furniture } from '../model/Furniture';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public furnitures:Furniture[]=[];
  public furniture:Furniture;
  cartId:number;
  result:string;
  constructor(private service:FurnitureManagementService,private shoppingService:CustomershoppingService, private route:Router) { 
    this.cartId=parseInt(sessionStorage.getItem("cartId"));
  }

  ngOnInit() {
    this.service.getAllFurnitures().subscribe(f=>this.furnitures=f);
    console.log(this.cartId);
  }

  update(furniture:Furniture):any{
    this.route.navigate(["/updateFurniture",furniture.furnitureId]);
  }

  delete(furniture:Furniture):any{
    this.service.deleteFurnitureById(furniture.furnitureId).subscribe(a=>{
      this.result=a;
      window.location.reload();
    },(err:Response)=>{
      console.log(err['error'])
      if(err['error']!=null)
      alert("This product already exists in a customer's cart!!!")
      
    });
 
  }
  logout():any{
    sessionStorage.clear();
    this.route.navigate([""]);
  }
}
