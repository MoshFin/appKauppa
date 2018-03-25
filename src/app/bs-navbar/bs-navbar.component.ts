import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { AppUser } from '../models/app-user';
import { UserService } from '../user.service';
import { ShoppingCardService } from '../shopping-card.service';
import { ShoppingCard } from '../models/shopping-card';
import 'rxjs/add/operator/map';
import { Item } from '../models/item';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  shoppingCarditemCount: number;
  constructor(private authService: AuthService,
    private cartService: ShoppingCardService) {
  }

  async ngOnInit() {
    this.authService.AppUser$.subscribe(appUser => this.appUser = appUser);

    let card$ = await this.cartService.getShoppingCard();

    card$.subscribe((card: ShoppingCard) => {
      this.shoppingCarditemCount = 0;
      let items = card.items;
      for (const key in items) {
        if (items.hasOwnProperty(key)) {
          const element = items[key];
          this.shoppingCarditemCount += element.quanity
        }
      }
    })
  }

  logout() {
    this.authService.logout();
  }



}
