import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from '../model/Furniture';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class CustomershoppingService {

  constructor(private h:HttpClient) { }
  url:string="http://localhost:9091";

  getAllFurnitures():Observable<any>{
    return this.h.get<any>(this.url+"/getAllFurnitures");
  }

  getFurnitureByName(furnitureName:string):Observable<any>{
    return this.h.get<any>(this.url+"/getFurnitureByName"+furnitureName);
  }

  addToCart(cartId:number,furniture:Furniture):Observable<any>{
    return this.h.put<any>(this.url+"/addToCart/"+cartId,furniture,{responseType:'json'});
  }

  placeOrder(customerId:number,order:Order):Observable<any>{
    return this.h.put<any>(this.url+"/placeOrder/"+customerId,order,{responseType:'json'});
  }
}
