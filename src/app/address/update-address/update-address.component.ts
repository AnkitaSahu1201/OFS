import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  address:Address=new Address();
  customerId:number;
  public listAdd:Address[]=[];
  public id:number;
  constructor(private addrService:AddressService,private r:ActivatedRoute,private route:Router,private l:Location) { 
    this.customerId=parseInt(sessionStorage.getItem("userId"));
    this.id=parseInt(this.r.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.addrService.getAllAddresss(this.customerId).subscribe(a=>{
      this.address=a.filter((b)=>{return b.aid==this.id})[0];
    })
  }

  submit():any{
    console.log(this.address);
    this.addrService.updateAddress(this.customerId,this.address).subscribe(a=>this.address=a);
    this.route.navigate(["/viewAddress"]).then(()=>{window.location.reload()});
  }
  back():any{
    this.l.back();
  }
}
