import { Item } from "./item";
import { Observable } from 'rxjs/observable';
import { Product } from "./product";


export class ShoppingCard {

    items: Item[] = [];
    constructor(public itemsMap: {[productId: string] : Item}) {
        for (const key in itemsMap) {
            let item = itemsMap[key]
            this.items.push(new Item(item.product, item.quanity))
        }
    }

    get productIds() {
        return Object.keys(this.items);
    }

    get totalSum() {
        let sum = 0;
        for (const key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                const element = this.items[key].totalPrice;
                sum += element
                
            }
        }
        return sum;
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