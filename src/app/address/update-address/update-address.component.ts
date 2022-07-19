import { Component, OnInit } from '@angular/core';
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
  constructor(private addrService:AddressService) { }

  ngOnInit(): void {
  }

  submit():any{
    console.log(this.address);
    this.addrService.updateAddress(this.customerId,this.address).subscribe(a=>this.address=a);
  }
}
