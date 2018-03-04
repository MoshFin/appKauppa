import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map'
import { Observable } from '@firebase/util';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  
  
  products: {key: string , data: Product}[];
  filteredProducts:{key: string , data: Product}[];
  supscription: Subscription;
  
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.supscription = this.getProductList().subscribe( products => 
      {
        this.filteredProducts = this.products = products;
      })

  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.supscription.unsubscribe();
  }

  getProductList() {
    return this.productService.getAllProducts().map( x => {
      return x.map( y => {
        let key: string = y.key;
        let data: Product = y.payload.exportVal();
        return { key, data}
      })
    })
  }
 
  filterForSearching(query: string) {
    this.filteredProducts = (query) ? 
    this.products.filter(f => f.data.title.toLowerCase().includes(query.toLowerCase())) :
    this.products
  }
}
