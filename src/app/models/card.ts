import { ProductObject } from "./product-object";

export interface Card {
    key: number;
    items: {
        product: ProductObject,
        quanity: number
    },
    
}