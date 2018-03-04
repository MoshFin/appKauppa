import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { AdminOrdarsComponent } from './admin/admin-ordars/admin-ordars.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdarsComponent } from './my-ordars/my-ordars.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersSuccessComponent } from './orders-success/orders-success.component';

import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth-guard.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';

const appRoutes: Routes =[
  /* For all */
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  /* User routes */
  {path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'my/ordars', component: MyOrdarsComponent, canActivate: [AuthGuard]},
  {path: 'ordar-success', component: OrdersSuccessComponent, canActivate: [AuthGuard]},

  /* Admin routes */
  {
    path: 'admin/products/new', 
    component: AdminFormComponent, 
    canActivate: [AuthGuard, AdminAuthGuard]},
  {
    path: 'admin/products/:id', 
    component: AdminFormComponent, 
    canActivate: [AuthGuard, AdminAuthGuard]},

  {
    path: 'admin/products', 
    component: AdminProductsComponent, 
    canActivate: [AuthGuard, AdminAuthGuard]},

  {
    path: 'admin/ordars', 
    component: AdminOrdarsComponent, 
    canActivate: [AuthGuard, AdminAuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminOrdarsComponent,
    AdminProductsComponent,
    AdminFormComponent,
    BsNavbarComponent,
    CheckOutComponent,
    HomeComponent,
    LoginComponent,
    MyOrdarsComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrdersSuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),// ng-bootstrap
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
