import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 check:Boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
cod():void{
  this.check=!this.check;
}
}
