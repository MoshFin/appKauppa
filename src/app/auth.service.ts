import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user$ : Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.user$ = angularFireAuth.authState;
  }

  login(){
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.angularFireAuth.auth.signOut()
  }

}
