import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CartLine } from '../interfaces/cart-line';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // addProduct(product: Product, quantity: number) {
  // return  localStorage.setItem('product', JSON.stringify(product));
  // }

  /****************************************** */

  // addProduct(product: Product) {
  // return  localStorage.setItem('product', JSON.stringify(product));
  // }

  // getCartLines(product:Product): CartLine[] {
  // cartLine: string = localStorage.getItem('product') || [];

  // const cart = JSON.stringify(product) as CartLine;
  // cart.product = product;
  //   if (cartLine) {
  //     this.product = JSON.parse(cartLine) as CartLine;
  //   }
  // }

  /****************************************** */
  // getCartLines(): CartLine[]{

  //   return [];
  // }
}
