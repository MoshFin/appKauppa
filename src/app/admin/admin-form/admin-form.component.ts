import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import 'rxjs/add/operator/map';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  categories$;

  constructor(
    private categoryService: CategoryService, private productS: ProductService) { 
    this.categories$ = categoryService.getCategories().snapshotChanges(); 
   
  }

  ngOnInit() {
  }

  save(product) {
    this.productS.create(product);
  }

}

 /*categoryService.getCategories().snapshotChanges().map(x => {
      return x.map(y => {
        let key = y.key;
        let data = y.payload.exportVal()
        console.log({ key, data })
        return {key, data};
      })
    });*/
