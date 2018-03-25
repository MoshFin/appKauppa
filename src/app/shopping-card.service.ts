import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ProductObject } from './models/product-object';
import { Observable } from 'rxjs/observable';
import { Item } from './models/item';
import { Card } from './models/card';
import { ShoppingCard } from './models/shopping-card';

@Injectable()
export class ShoppingCardService {

 
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  addToCard(product: ProductObject) {
    this.AddOrRemoveQuanity(product, 1);
  }

  removeFromCard(product: ProductObject) {
    this.AddOrRemoveQuanity(product, -1);
  }

  private getItem(cardId, productId) {
    return this.angularFireDatabase.object('/shopping-cards/' + cardId + '/items/' + productId);
  }

  private create() {
    return this.angularFireDatabase.list('/shopping-cards').push({
      dateCreated: new Date().getTime()
    });

  }

  async getShoppingCard(): Promise<Observable<ShoppingCard>>{
    let card_id = await this.getOrCreateCardId();
    return this.angularFireDatabase.object('/shopping-cards/' + card_id).valueChanges().map(
      (card: any) => new ShoppingCard(card.items)
    );
  }

  private async getOrCreateCardId() {
    let card_id = localStorage.getItem('cardId');
    if (card_id) return card_id;

    let shopingCard = await this.create();
    card_id = shopingCard.key
    localStorage.setItem('cardId', card_id);
    return card_id;
  }

  private async AddOrRemoveQuanity(product, quanity) {
    let card_id = await this.getOrCreateCardId();
    let item$ = this.getItem(card_id, product.key);
    item$.valueChanges().take(1).subscribe((item: any) => {
      item$.update({ product: product.data, quanity: (item ? item.quanity : 0) + quanity });
    });

  }

}
