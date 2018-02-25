import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(private angularFireDatebase: AngularFireDatabase) {
   }

   getCategories() {
     return this.angularFireDatebase.list('/categories', ref => ref.orderByChild('name'));
   }

}
