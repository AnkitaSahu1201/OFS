import { Customer } from "./Customer";

export class Order {
    public orderId: number;
    public orderDate: Date;
    public customer: Customer[]=[];
    public quantity: number;
    public price: number;
    public status: string;

}
