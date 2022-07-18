
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Account } from 'src/assets/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService{

  constructor(private h:HttpClient) { }
  url:string="http://localhost:9091";

  addAccount(userId:number, account:Account):Observable<any>{
    return this.h.post<any>(this.url+"/addAccount",account,{responseType:'json'});
  }

  updateAccount(userId:number, account:Account):Observable<any>{
    return this.h.put(this.url+"/updateAccount",account,{responseType:'json'});
  }

 deleteAccount(userId:number, account:Account):Observable<any>{
    return this.h.post(this.url+"/deleteAccount",account,{responseType:'json'});
  }

  getAccounts(userId:number):Observable<any>{
    return this.h.get<any>(this.url+"/getAccounts/"+userId);
  }



}
