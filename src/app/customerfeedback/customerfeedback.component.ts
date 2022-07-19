import { Component, OnInit } from '@angular/core';
import { CustomershoppingComponent } from '../customershopping/customershopping.component';
import { Review } from '../model/review';
import { CustomerfeedbackService } from './customerfeedback.service';

@Component({
  selector: 'app-customerfeedback',
  templateUrl: './customerfeedback.component.html',
  styleUrls: ['./customerfeedback.component.css']
})
export class CustomerfeedbackComponent implements OnInit {
  public review:Review=new Review();
  constructor(private service:CustomerfeedbackService) { }

  ngOnInit(): void {
  }

  submit():any{
    console.log(this.review);
    // this.service.addReview()
  }

}
