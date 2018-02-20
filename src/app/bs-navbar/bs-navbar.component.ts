import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { AppUser } from '../models/app-user';
import { UserService } from '../user.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  appUser: AppUser;
  constructor(
    private authService: AuthService) {
    
      authService.AppUser$.subscribe(
        appUser => this.appUser = appUser
      )
   }

  logout(){
    this.authService.logout();
  }

  

}
