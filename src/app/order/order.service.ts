import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private h: HttpClient) { }

  public url: string = 'http://localhost:9091/';

  getAllOrders():Observable<any>{
    return this.h.get<any[]>(this.url + "getAllOrders")
  }

  getOrderByStatus(status:String): Observable<any>{
    return this.h.get<any[]>(this.url + "status/" +status);
  }

  updateOrder(order : Order): Observable<any>{
    return this.h.put(this.url + "updateOrder" ,order,{responseType: 'json'})
  }

  updateOrderById(orderId : Number): Observable<any>{
    return this.h.put(this.url + "updateOrderById" + orderId,{responseType: 'json'})
  }

}