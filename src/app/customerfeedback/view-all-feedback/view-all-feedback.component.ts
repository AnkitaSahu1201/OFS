import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FurnitureManagementService } from 'src/app/furniture-management/furniture-management.service';
import { Review } from 'src/app/model/review';
import { CustomerfeedbackService } from '../customerfeedback.service';

@Component({
  selector: 'app-view-all-feedback',
  templateUrl: './view-all-feedback.component.html',
  styleUrls: ['./view-all-feedback.component.css']
})
export class ViewAllFeedbackComponent implements OnInit {
  public furnitureId:number;
  public rev:Review=new Review();
  viewlist:boolean=false;
  rating:number;
  constructor(private service:CustomerfeedbackService,private fservice:FurnitureManagementService, private r:ActivatedRoute) { 
    this.furnitureId=parseInt(this.r.snapshot.paramMap.get("Id"));
  }
  listrev:Review[];
  ngOnInit(): void {
    this.fservice.getFurnitureById(this.furnitureId).subscribe(f=>{this.listrev=f.feedBacks
    console.log(f)
    });

  }
  // viewAllReview():void{
  //   this.service.getAllReviews().subscribe((r)=>{this.listrev=r,this.viewlist=true});
  // }
  // viewAllReviewRating():void{
  //   this.service.getReviewByreviewRating(this.rating).subscribe((r)=>{this.listrev=r,this.viewlist=true});
  // }
 
 
  

}
