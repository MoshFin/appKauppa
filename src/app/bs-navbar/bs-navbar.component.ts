import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { AppUser } from '../models/app-user';
import { UserService } from '../user.service';
import { ShoppingCardService } from '../shopping-card.service';
import { ShoppingCard } from '../models/shopping-card';
import 'rxjs/add/operator/map';
import { Item } from '../models/item';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  shoppingCarditemCount: number;
  card$: Observable<ShoppingCard>;

  constructor(private authService: AuthService,
    private cartService: ShoppingCardService) {
  }

  async ngOnInit() {
    this.authService.AppUser$.subscribe(appUser => this.appUser = appUser);
    this.card$ = await this.cartService.getShoppingCard();
  }

  logout() {
    this.authService.logout();
  }



}
