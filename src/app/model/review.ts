import { Customer } from "./Customer";
import { Furniture } from "./Furniture";

export class  Review{
    public reviewId:number;
    public description:String ;
    public reviewRating:number;
    public furniture:Furniture ;
    public customer:Customer;

}