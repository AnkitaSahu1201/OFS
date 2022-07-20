import { Customer } from "./Customer";
import { Furniture } from "./Furniture";

export class Cart{
    
    public  cartId:number;
	public customer:Customer;
	public furnitures: Furniture[] = [];
	public  quantity:number;

}