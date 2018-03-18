import { ProductObject } from "./product-object";

export interface ShoppingCard {
    key: number;
    items: {
        product: ProductObject,
        quanity: number
    },
    
}