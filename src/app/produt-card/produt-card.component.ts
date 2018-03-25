import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCardService } from '../shopping-card.service';
import { ProductObject } from '../models/product-object';
import { Card } from '../models/card';
import { ShoppingCard } from '../models/shopping-card';

@Component({
  selector: 'produt-card',
  templateUrl: './produt-card.component.html',
  styleUrls: ['./produt-card.component.css']
})
export class ProdutCardComponent {

  @Input('product')
  product: ProductObject;

  @Input('actions')
  actions : boolean = false;

  @Input('shoppingCard')
  shoppingCard: ShoppingCard;

  constructor(
    private shoppingService: ShoppingCardService) { }
    

  addToShoppingCard() {
    this.shoppingService.addToCard(this.product)
  }

  removeShoppingCard() {
    this.shoppingService.removeFromCard(this.product);
  }

  getQuanity(): number {
    if(!this.shoppingCard) return 0;
    let item = this.shoppingCard.itemsMap[this.product.key];
    return item? item.quanity : 0;
  }
}
