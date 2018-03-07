import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

}
