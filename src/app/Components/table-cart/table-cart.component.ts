import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-line';

@Component({
  selector: 'app-table-cart',
  templateUrl: './table-cart.component.html',
  styleUrls: ['./table-cart.component.css'],
})
export class TableCartComponent {
  @Input() cartLines: CartLine[] = [];
  @Output() alertLimit = new EventEmitter<string>();

  incQuantity(i: number) {
    this.cartLines[i].quantity += 1;
    if (this.cartLines[i].quantity >= 10) {
      this.alertLimit.emit("You've exceeded the limit");
    }
  }

  decQuantity(i: number) {
    if (this.cartLines[i].quantity > 1) this.cartLines[i].quantity -= 1;
    if (this.cartLines[i].quantity > 2)
      this.alertLimit.emit('quantity is low enough');
  }
  remove(i: number) {
    this.cartLines.splice(i, 1);
  }
}
