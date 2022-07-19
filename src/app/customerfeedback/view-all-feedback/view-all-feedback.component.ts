import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { CustomerfeedbackService } from '../customerfeedback.service';

@Component({
  selector: 'app-view-all-feedback',
  templateUrl: './view-all-feedback.component.html',
  styleUrls: ['./view-all-feedback.component.css']
})
export class ViewAllFeedbackComponent implements OnInit {

  public rev:Review=new Review();
  viewlist:boolean=false;
  rating:number;
  constructor(private service:CustomerfeedbackService) { 
  }
  listrev:Review[];
  ngOnInit(): void {
  }
  viewAllReview():void{
    this.service.getAllReviews().subscribe((r)=>{this.listrev=r,this.viewlist=true});
  }
  viewAllReviewRating():void{
    this.service.getReviewByreviewRating(this.rating).subscribe((r)=>{this.listrev=r,this.viewlist=true});
  }
 
 
  

}
