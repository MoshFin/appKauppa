import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCardService } from '../shopping-card.service';
import { ProductObject } from '../models/product-object';

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

  constructor(
    private shoppingService: ShoppingCardService) { }
    

  addToShoppingCard() {
    this.shoppingService.addToCard(this.product)

  }
}
