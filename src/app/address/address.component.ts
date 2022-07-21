import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../model/address';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
public addresses:Address[]=[];
public custId:number;
public address:Address=new Address();
  constructor(private a:AddressService,private l: Location,private r:Router) {
    this.custId=parseInt(sessionStorage.getItem("userId"));
   }

  ngOnInit() {
    this.a.getAllAddresss(this.custId).subscribe(a=>this.addresses=a);
  }
  back():void{
    this.r.navigate(["/viewAllFurnitures"]);
  }
  add():void{
    this.r.navigate(["/addAddress"]);
  }
  update(address:Address):any{
   
    this.r.navigate(["/updateAddress",address.aid]);

  }
  delete(address:Address):any{
    this.a.deleteAddress(this.custId,address.aid).subscribe(a=>this.address=a);
    window.location.reload();
  }

}
