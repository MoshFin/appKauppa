import { Product } from "./product";

export class Item {
   
    constructor(public product: Product, public quanity: number) {

    }

    get totalPrice() {
        return this.product.price * this.quanity;
    }
}