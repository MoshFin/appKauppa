import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from '@firebase/util';
import { AppUser } from './models/app-user';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class UserService {

 
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  save(user: firebase.User ) {
    this.angularFireDatabase.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
    })
  }

  getUser(id: string): AngularFireObject<AppUser>{
    return this.angularFireDatabase.object('/users/' + id);
  }
}
