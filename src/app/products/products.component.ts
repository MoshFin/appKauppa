import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { ProductObject } from '../models/product-object';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ShoppingCardService } from '../shopping-card.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{

 
  shoppingCard: any;
  subscrebtion: Subscription;
  products: ProductObject[]= [];
  filteredProducts: ProductObject[]= [];
  category: string;


  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private cardService: ShoppingCardService ) {

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

   async ngOnInit() {

     this.subscrebtion = (await this.cardService.getShoppingCard())
     .subscribe(card => this.shoppingCard = card);
   }

   ngOnDestroy(): void {
    this.subscrebtion.unsubscribe();
  }
}
