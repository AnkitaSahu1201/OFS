import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private h:HttpClient) { }
    url:string="http://localhost:9091/cart";


    getAllCarts():Observable<any>{
      return this.h.get<any>(this.url+"/getAllCarts");
    }

    getAllCartsById(cartId: number):Observable<any>{
      return this.h.get<any>(this.url+"/getAllCartsById/"+cartId);
    }

    updateCart(cart: Cart):Observable<any>{
      return this.h.put(this.url+"/updateCart",cart,{responseType:'json'});
    }

    updateCartById(cart: Cart, cartId: number):Observable<any>{
      return this.h.put(this.url+"/"+cartId+"/updateCart",cart,{responseType:'json'});
    }

    deleteCartById(cartId: number):Observable<any>{
      return this.h.delete(this.url+"/deleteCart/"+cartId);
    }
}
