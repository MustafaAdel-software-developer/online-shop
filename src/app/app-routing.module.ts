import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { ShopComponent } from './Components/shop/shop.component';
import { DetailComponent } from './Components/detail/detail.component';
import { ProductsComponent } from './Components/products/products.component';
import { StartsComponent } from './Components/starts/starts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'stars', component: StartsComponent },
  // {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
