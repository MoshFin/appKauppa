import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {

  user$ : Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, private route: ActivatedRoute) { 
    this.user$ = angularFireAuth.authState;
  }

  login(){
    let routerUrl = this.route.snapshot.queryParamMap.get('routerUrl') || '/';
    localStorage.setItem('routerUrl', routerUrl); 
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.angularFireAuth.auth.signOut()
  }

}
