import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/model/Furniture';
import { FurnitureManagementService } from '../furniture-management.service';

@Component({
  selector: 'app-update-furniture',
  templateUrl: './update-furniture.component.html',
  styleUrls: ['./update-furniture.component.css']
})
export class UpdateFurnitureComponent implements OnInit {
  public furniture:Furniture=new Furniture();
  constructor(private service:FurnitureManagementService) { }

  ngOnInit(): void {
  }

  submit():any{
    this.service.updateFurniture(this.furniture).subscribe(f=>this.furniture=f);
  }
}
