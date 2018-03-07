import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCardService } from '../shopping-card.service';

@Component({
  selector: 'produt-card',
  templateUrl: './produt-card.component.html',
  styleUrls: ['./produt-card.component.css']
})
export class ProdutCardComponent {

  @Input('product')
  product;

  @Input('actions')
  actions : boolean = false;

  constructor(private cardService: ShoppingCardService) { }
    /* 
     add shopping card to local Storage
     if shoppig card has no id then
     --> call card service
     --> add product to DB
     --> add to shoppig card
     is shopping card has an id then
     --> add to shopping card
    */
    

  addToShoppingCard() {
    let cardId = localStorage.getItem('cardId');

    if(!cardId){
      this.cardService.create().then(result => {
        localStorage.setItem('cardId', result.key);
        //add to shopping card
      })
    } else {
      // add to shopping card
    }
  }
}
