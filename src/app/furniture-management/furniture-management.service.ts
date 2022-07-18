import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Furniture } from '../model/Furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureManagementService {

  constructor(private h: HttpClient) { }
  public url: string = 'http://localhost:9091/';
  
  getAllFurnitures(): Observable<any> {
    return this.h.get<any[]>(this.url + "allfurnitures");
  }


  getFurnitureById(furnitureId:number):Observable<any>{
    return this.h.get<any[]>(this.url + "getFurnituresById"+furnitureId);
  }


  registerFurniture(furniture:Furniture):Observable<any>{
    return this.h.post(this.url + "register", {responseType: 'text'})
  }


  updateFurniture(furniture:Furniture):Observable<any>{
    return this.h.put(this.url + "update", {responseType: 'json'});
  }

  updateFurnitureById(furnitureId:number,furniture:Furniture):Observable<any>{
    return this.h.put(this.url + "updatebyId/"+furnitureId, {responseType: 'json'});
  }

  deleteFurniture(furniture:Furniture):Observable<any>{
    return this.h.delete(this.url + "remove");
  }

  deleteFurnitureById(furnitureId:number):Observable<any>{
    return this.h.delete(this.url + "remove/"+ furnitureId, {responseType: 'json'});
  }

}
