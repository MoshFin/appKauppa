import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  create(product: any){
    this.angularFireDatabase.list('/products').push(product);
  }

}
