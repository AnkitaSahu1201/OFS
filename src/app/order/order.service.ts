import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private h: HttpClient) { }

  public url: string = 'http://localhost:9091/order/';

  getAllOrders():Observable<any>{
    return this.h.get<any[]>(this.url + "getAllOrders")
  }

  getOrderById(orderId:number):Observable<any>{
    return this.h.get<any>(this.url+"getOrderById/"+orderId,{responseType: 'json'})
  }

  getOrderByStatus(status:String): Observable<any>{
    return this.h.get<any[]>(this.url + "status/" +status,{responseType: 'json'});
  }

  getOrderByCustomer(custId:number): Observable<any>{
    return this.h.get<any[]>(this.url + "getOrderByCustomer/"+custId,{responseType: 'json'})
  }

  updateOrder(order : Order): Observable<any>{
    return this.h.put(this.url + "updateOrder" ,order,{responseType: 'json'})
  }

  updateOrderById(orderId : Number): Observable<any>{
    return this.h.put(this.url + "updateOrderById" + orderId,{responseType: 'json'})
  }

}
