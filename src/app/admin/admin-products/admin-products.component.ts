import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map'
import { Observable } from '@firebase/util';
import { Product } from '../../models/product';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;

  @ViewChild(MatSort) 
  sort: MatSort;

 

  products: {key: string, position: number, data: Product}[];
  supscription: Subscription;

  displayedColumns = ['position', 'title', 'price', 'edit'];
  dataSource = new MatTableDataSource();
  
  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.supscription = this.getProductList().subscribe( products => 
      {
        this.dataSource.data = this.products = products;
    
      })

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.supscription.unsubscribe();
  }

  getProductList() {
    return this.productService.getAllProducts().map( x => {
      let position: number = 0;
      return x.map( y => {
        let key: string = y.key;
        position= position + 1 ;
        let data: Product = y.payload.exportVal();
        return { key, position, data}
      })
    })
  }
 
  filterForSearching(query: string) {
    this.dataSource.data = (query) ? 
    this.products.filter(f => f.data.title.toLowerCase().includes(query.toLowerCase())) :
    this.products
  }

}
