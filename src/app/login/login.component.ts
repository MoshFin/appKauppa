import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { GoogleAuthProvider } from '@firebase/auth-types';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  user: boolean;
  constructor(private authService: AuthService) {
    this.authService.AppUser$.subscribe( x => 
      this.user = x)
   }

  login(){
    this.authService.login()
  }

}
