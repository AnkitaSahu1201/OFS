import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private h: HttpClient) { }

  public url: string = 'http://localhost:9091/';

  getBillById(billNo : Number): Observable<any>{
    return this.h.get(this.url + "getBillById/" + billNo);
  }

  //Pay By Cash.

  //Pay By Card.

}
