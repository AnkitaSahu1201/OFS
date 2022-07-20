import { Bill } from "./bill";
import { Customer } from "./Customer";
import { Furniture } from "./Furniture";

export class Order {
    public orderId: number;
    public orderDate: Date;
    public customer: Customer[]=[];
    public quantity: number;
    public price: number;
    public status: string;
    public furniture:Furniture[]=[];
    public bill:Bill;

}
