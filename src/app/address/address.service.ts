import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'cluster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private h:HttpClient) { }
  url:string="http://localhost:9091";

  addAddress(userId:number, address:Address):Observable<any>{
    return this.h.post<any>(this.url+"/addAddress",address,{responseType:'json'});
  }

  updateAddress(userId:number, address:Address):Observable<any>{
    return this.h.put(this.url+"/updateAddress",address,{responseType:'json'});
  }

  deleteAddress(userId:number, address:Address):Observable<any>{
    return this.h.post(this.url+"/deleteAddress",address,{responseType:'json'});
  }

  getAllAddresss(userId:number):Observable<any>{
    return this.h.get<any>(this.url+"/getAdresses/"+userId);
  }

}
