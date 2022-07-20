import { Cart } from './Cart';
import { Review } from './review';


export class Furniture{
    public furnitureId: number;
    public furnitureName: string;
    public furnitureColor: string;
    public furnitureModel: string;
    public price: number;
    public feedBacks:Review[]=[];
    public carts:Cart[]=[];

}