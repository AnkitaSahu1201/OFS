import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address:Address=new Address();
  customerId:number;
  public listAdd:Address[]=[];
  public id:number;
  constructor(private addrService:AddressService,private r:ActivatedRoute,private route:Router,private l:Location) { 
    this.customerId=parseInt(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
   
  }

  submit():any{
    console.log(this.address);
    this.addrService.addAddress(this.customerId,this.address).subscribe(a=>this.address=a);
    this.route.navigate(["/viewAddress"]).then(()=>{window.location.reload()});
  }
  back():any{
    this.l.back();
  }
}
