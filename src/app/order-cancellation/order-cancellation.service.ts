import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderCancellationService {

  constructor(private h: HttpClient) { }

  public url: string = 'http://localhost:9091/';

  deleteOrder(ord: Order): Observable<any>{
    return this.h.delete(this.url + "remove/");
  }

  deleteOrderById(orderId: number): Observable<any>{
    return this.h.delete(this.url + "remove/"+ orderId, {responseType: 'json'});
  }

}
