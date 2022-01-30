import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductMangagementComponent } from './product-mangagement/product-mangagement.component';
import { CategorieManagementComponent } from './categorie-management/categorie-management.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from 'src/services/CategoryService/category.service';
import { ProductService } from 'src/services/ProductService/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductMangagementComponent,
    CategorieManagementComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'products/:id', component: ProductMangagementComponent},
      {path: 'categories', component: CategorieManagementComponent}
    ])
  ],
  providers: [
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
