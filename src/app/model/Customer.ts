import { Account } from "./Account";
import { Address } from "./address";
import { Cart } from "./Cart";
import { Order } from "./order";
import { Review } from "./review";
import { User } from "./User";

export class Customer extends User{
    public addresses:Address[]=[];
    public accounts:Account[]=[];
    public mobileNo:string;
    public email:string;
    public cart:Cart;
    public orders:Order[]=[];
    public listReviews:Review[]=[];

    
}