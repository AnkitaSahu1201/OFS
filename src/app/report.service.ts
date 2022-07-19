import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private h:HttpClient) { }
  url:string="http://localhost:9091/";

  getAllBills():Observable<any>{
    return this.h.get<any>(this.url+"getAllBills",{responseType:'json'});
  }
  getAllCustomers():Observable<any>{
    return this.h.get<any>(this.url+"getAllCustomers",{responseType:'json'});
  }
  getAllCarts():Observable<any>{
    return this.h.get<any>(this.url+"getAllCarts",{responseType:'json'});
  }
  getAllOrders():Observable<any>{
    return this.h.get<any>(this.url+"getAllOrders",{responseType:'json'});
  }
}
