import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; 
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { AppUser } from './models/app-user';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/of'

@Injectable()
export class AuthService {

  user$ : Observable<firebase.User>;
 
  constructor(
    private angularFireAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private router: Router,
    private userSevice: UserService) { 

    this.user$ = angularFireAuth.authState;
  }

  login(){
    let routerUrl = this.route.snapshot.queryParamMap.get('routerUrl') || '/';
    localStorage.setItem('routerUrl', routerUrl); 
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/'])
  }

  get AppUser$() {
    return this.user$
    .switchMap(user => {
      if(user) { 
        return this.userSevice.getUser(user.uid).valueChanges()
      }
      return Observable.of(null);
    })
  }
}
