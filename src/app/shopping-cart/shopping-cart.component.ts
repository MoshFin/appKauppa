import { Component, OnInit } from '@angular/core';
import { ShoppingCardService } from '../shopping-card.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCard } from '../models/shopping-card';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  card$:Observable<ShoppingCard>
  constructor(private cardService: ShoppingCardService ) { }

  async ngOnInit() {
    this.card$ = await this.cardService.getShoppingCard();
  }

}
