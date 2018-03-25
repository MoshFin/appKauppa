import { Item } from "./item";
import { Observable } from 'rxjs/observable';
import { Product } from "./product";


export class ShoppingCard {

    items: Item[] = [];
    constructor(public itemsMap: {[productId: string] : Item}) {
        for (const key in itemsMap) {
            this.items.push(itemsMap[key])
        }
    }

    get productIds() {
        return Object.keys(this.items);
    }

    get shoppingCardItemsQuanities() {
        let count = 0;
        let items = this.items;
        for (const key in items) {
            if (items.hasOwnProperty(key)) {
                const element = items[key];
                count += element.quanity
            }
        }
        
        return count;
    }
}