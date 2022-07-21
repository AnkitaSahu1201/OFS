import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/model/Furniture';
import { FurnitureManagementService } from '../furniture-management.service';

@Component({
  selector: 'app-update-furniture',
  templateUrl: './update-furniture.component.html',
  styleUrls: ['./update-furniture.component.css']
})
export class UpdateFurnitureComponent implements OnInit {
  public furniture:Furniture=new Furniture();
  public furnitureId:number;
  constructor(private service:FurnitureManagementService,private r:ActivatedRoute,private route:Router,private l:Location) { 
    this.furnitureId=parseInt(this.r.snapshot.paramMap.get("Id"));
  }

  ngOnInit(): void {
    this.service.getFurnitureById(this.furnitureId).subscribe(f=>this.furniture=f);
  }

  submit():any{
    
    this.service.updateFurniture(this.furniture).subscribe(f=>this.furniture=f);
    this.route.navigate(["/adminPage"]).then(()=>window.location.reload());
    
  }
  back():any{
    this.l.back();
  }
}
