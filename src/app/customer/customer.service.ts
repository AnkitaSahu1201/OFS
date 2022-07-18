import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private h:HttpClient) { }

  url:string="http://localhost:9091/";

  loginUser(username:string,password:string):Observable<any>{
    return this.h.get(this.url+"validateUser",{responseType:'json'});
  }

  registerNewUser(customer:Customer):Observable<any>{
    return this.h.post<any>(this.url+"Customer/new",customer,{responseType:'json'});
  }

  updateUser(customer:Customer):Observable<any>{
    return this.h.put<any>(this.url+"Customer/update",customer,{responseType:'json'});
  }

  deleteUserById(customer:Customer,customerId:number):Observable<any>{
    return this.h.delete(this.url+"/Customer/deleteUserById/"+customerId,{responseType:'json'});
  }
}
