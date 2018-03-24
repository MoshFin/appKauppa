import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { AppUser } from '../models/app-user';
import { UserService } from '../user.service';
import { ShoppingCardService } from '../shopping-card.service';
import { ShoppingCardDataBase } from '../models/shopping-card.db';
import 'rxjs/add/operator/map';

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
    let card = await this.cartService.getShoppingCardAsMap();
    card.subscribe(item => {
      this.shoppingCarditemCount = 0;
      for (const key in item.data.items) {
        if (item.data.items.hasOwnProperty(key)) {
          const element = item.data.items[key];
          this.shoppingCarditemCount += element.quanity;
        }
      }
    })
  }

  logout() {
    this.authService.logout();
  }



}
