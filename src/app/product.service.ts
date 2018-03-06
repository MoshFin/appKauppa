import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';
import { Product } from './models/product';

@Injectable()
export class ProductService {

  
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  create(product: any){
    this.angularFireDatabase.list('/products').push(product);
  }

  getAll(): Observable<any[]>{
    return this.angularFireDatabase.list('/products').snapshotChanges().map( x => {
      let position: number = 0;
      return x.map( y => {
        let key: string = y.key;
        position= position + 1 ;
        let data: Product = y.payload.exportVal();
        return { key, position, data}
      })
    });
  }

  getProduct(productId){
    return this.angularFireDatabase.object('/products/' + productId).valueChanges();
  }

  updateProduct(product, productId) {
    return this.angularFireDatabase.object('/products/' + productId).update(product);
  } 

  delete(productId) {
    this.angularFireDatabase.object('/products/' + productId).remove();
  }

}
