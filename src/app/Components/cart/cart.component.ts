import { Component } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartLines: CartLine[] = [
    {
      price: 180,
      quantity: 2,
      product: {
        _id: '0',
        category_id: '1',
        description: '',
        discount: 0.2,
        image: 'assets/img/prod-1.jpg',
        is_featured: true,
        is_recent: true,
        name: 'Product 1',
        price: 100,
        rating: 4.5,
        rating_count: 45,
        color: 'black',
        size: 'm',
      },
    },
    {
      price: 100,
      quantity: 2,
      product: {
        _id: '1',
        category_id: '2',
        description: '',
        discount: 0.2,
        image: 'assets/img/prod-2.jpg',
        is_featured: true,
        is_recent: true,
        name: 'Product 1',
        price: 130,
        rating: 4.5,
        rating_count: 45,
        color: 'white',
        size: 'x',
      },
    },
  ];

  getSubTotal(): number {
    return this.cartLines
      .map((item) => item.price * item.quantity)
      .reduce((a, v) => (a += v), 0);
  }

  getShipping(): number {
    return (
      this.cartLines
        .map((item) => item.quantity)
        .reduce((a, v) => (a += v), 0) * 2
    );
  }

  getTotal(): number {
    return this.getShipping() + this.getSubTotal();
  }

  showAlert(msg: string) {
    alert(msg);
  }
}
