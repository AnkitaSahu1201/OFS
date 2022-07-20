import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
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
  public furnitureId:number;
  public customerId:number;
  constructor(private service:CustomerfeedbackService,private r:ActivatedRoute,private route:Router) { 
    this.furnitureId=parseInt(this.r.snapshot.paramMap.get("Id"));
    this.customerId=parseInt(sessionStorage.getItem("userId"));
  }

  ngOnInit(): void {
  }

  submit():any{
    console.log(this.review);
    this.service.addReview(this.furnitureId,this.customerId,this.review).subscribe(a=>this.review=a);
    this.route.navigate(["/viewAllFurnitures"]);
  }

}
