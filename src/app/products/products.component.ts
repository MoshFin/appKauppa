import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { ProductObject } from '../models/product-object';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: ProductObject[]= [];
  filteredProducts: ProductObject[]= [];
  category: string;


  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService) {

    this.productService.getAll().switchMap((p: ProductObject[]) => {
        this.products = p;
        return activeRoute.queryParamMap
      }).subscribe(
          param => {
            this.category = param.get('category');
            this.filteredProducts= (this.category) ?  
              this.filteredProducts = this.products.filter(x => this.category === x.data.category) :
              this.filteredProducts = this.products;             
          }
        )

    
   }
}
