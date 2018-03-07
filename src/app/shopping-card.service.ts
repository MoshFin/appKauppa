import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShoppingCardService {

  constructor(private  angularFireDatabase: AngularFireDatabase) {

  }

  create(){
    return this.angularFireDatabase.list('/shopping-card').push({
      dateCreated: new Date().getTime()
    });
    
  }

}
