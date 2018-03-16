import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ProductObject } from './models/product-object';

@Injectable()
export class ShoppingCardService {
  
  constructor(private  angularFireDatabase: AngularFireDatabase) {}

  async addToCard(product: ProductObject) {

    let card_id = await this.getOrCreateCardId();
    let item$ = this.getItem(card_id, product.key);
  
    item$.valueChanges().take(1).subscribe( (item: any)=> {
      
      item$.update({product: product.data, quanity: (item? item.quanity : 0) +1});
    });
  }

  private getItem(cardId, productId) {
    return this.angularFireDatabase.object('/shopping-cards/' + cardId + '/items/' + productId);
  }

  private create(){
    return this.angularFireDatabase.list('/shopping-cards').push({
      dateCreated: new Date().getTime()
    });
    
  }

  private getShoppingCard(card_id){
    return this.angularFireDatabase.object('/shopping-cards/'+ card_id);
  }

  private async getOrCreateCardId() {
    
    let card_id = localStorage.getItem('cardId');

    if (card_id) return card_id;

    let shopingCard = await this.create();
    card_id = shopingCard.key
    localStorage.setItem('cardId', card_id);
    return card_id;
  }

}
