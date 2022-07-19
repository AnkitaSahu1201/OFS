import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  public address:Address=new Address();
  public cust:Customer=new Customer();
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }

  submit():void{
    this.cust.addresses.push(this.address);
    console.log(this.cust);
    this.service.updateUser(this.cust).subscribe(a=>this.cust=a);
  }

}
