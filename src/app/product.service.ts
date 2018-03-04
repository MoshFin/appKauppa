import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ProductService {

  
  constructor(private angularFireDatabase: AngularFireDatabase) { }

  create(product: any){
    this.angularFireDatabase.list('/products').push(product);
  }

  getAllProducts(): Observable<any[]>{//todo return products class
    return this.angularFireDatabase.list('/products').snapshotChanges();
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
