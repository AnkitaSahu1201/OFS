import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../model/review';



@Injectable({
  providedIn: 'root'
})
export class CustomerfeedbackService {

  constructor(private h:HttpClient) { }
  url:string="http://localhost:9091/customerfeedbackcontroller";

  addReview(furnitureId:number,customerId:number,review :Review):Observable<any>{
    return this.h.post<any>(this.url+"/addReview/"+furnitureId+"/"+customerId,review,{responseType:'json'});
  }

  getAllReviews():Observable<any>{
    return this.h.get<any>(this.url+"/getAllReviews",{responseType:'json'});
  }

  getReviewByreviewRating(reviewRating:number):Observable<any>{
    return this.h.get<any>(this.url+"/getReviewByreviewRating/"+reviewRating,{responseType:'json'});
  }

}
