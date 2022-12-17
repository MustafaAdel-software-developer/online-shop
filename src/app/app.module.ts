import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './Components/shop/shop.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoryComponent } from './Components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { TableCartComponent } from './Components/table-cart/table-cart.component';
import { CartTotalComponent } from './Components/cart-total/cart-total.component';
import { DetailComponent } from './Components/detail/detail.component';
import { StartsComponent } from './Components/starts/starts.component';
import { ProductsFilterComponent } from './Components/products-filter/products-filter.component';
import { ProductsPaginationComponent } from './Components/products-pagination/products-pagination.component';
import { ProductsShopComponent } from './Components/products-shop/products-shop.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    CategoriesComponent,
    CategoryComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    TableCartComponent,
    CartTotalComponent,
    DetailComponent,
    StartsComponent,
    ProductsFilterComponent,
    ProductsPaginationComponent,
    ProductsShopComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
