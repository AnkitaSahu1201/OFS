import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/model/Furniture';
import { FurnitureManagementService } from '../furniture-management.service';

@Component({
  selector: 'app-addfurniture',
  templateUrl: './addfurniture.component.html',
  styleUrls: ['./addfurniture.component.css']
})
export class AddfurnitureComponent implements OnInit {
  public furniture:Furniture=new Furniture();
  constructor(public service:FurnitureManagementService) { }

  ngOnInit(): void {
  }

  submit():any{
    this.service.registerFurniture(this.furniture).subscribe(f=>this.furniture=f);
  }
}
