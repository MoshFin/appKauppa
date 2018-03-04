import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs/Observer';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  categories$;
  product: Product;
  productId;

  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { 

    this.categories$ = categoryService.getCategories().snapshotChanges();
    this.productId = this.route.snapshot.paramMap.get('id');
    
    if(this.productId) {
      console.log(this.productId)
      this.productService.getProduct(this.productId).take(1).subscribe((p: Product) => {
        this.product = p});
    }
  }

  ngOnInit() {
  }

  save(product) {
    
    if (this.productId === null ) {
      this.productService.create(product);
    } else {
      this.productService.updateProduct(product, this.productId);
    }
    setTimeout(() => {
      this.toProductsPage();
    }, 2000);
  }

  delete() {
    if(!confirm('Are you sure you want to delete this product ?')) return;
    this.productService.delete(this.productId);
    this.toProductsPage();
    
  }

  back() {
    this.toProductsPage();
  }
  private toProductsPage(){
    this.router.navigate(['/admin/products'])
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
