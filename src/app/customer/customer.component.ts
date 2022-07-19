import { Component, OnInit } from '@angular/core';
import { Address } from '../model/address';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }
   public address: Address = new Address();
   public cust:Customer=new
  constructor() { }

  ngOnInit(): void {
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

