import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private h:HttpClient) { }
  url:string="http://localhost:9091/addressManagement/address";

  addAddress(userId:number, address:Address):Observable<any>{
    return this.h.post<any>(this.url+"/"+userId,address,{responseType:'json'});
  }

  updateAddress(userId:number, address:Address):Observable<any>{
    return this.h.put(this.url+"/"+userId,address,{responseType:'json'});
  }

  deleteAddress(userId:number, aid:number):Observable<any>{
    return this.h.delete(this.url+"/"+userId+"/"+aid,{responseType:'json'});
  }

  getAllAddresss(userId:number):Observable<any>{
    return this.h.get<any>(this.url+"/"+userId);
  }

}
