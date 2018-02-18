import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { GoogleAuthProvider } from '@firebase/auth-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
