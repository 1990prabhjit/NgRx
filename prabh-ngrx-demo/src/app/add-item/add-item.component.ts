import { Component, Output, EventEmitter, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeCart } from '../store/cart.actions';

@Component({
  selector: 'app-add-item',
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
  standalone: true
})
export class AddItemComponent implements OnInit{


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addToCart() {
    // this.addItemToCart.emit();
    this.store.dispatch(addToCart());
  }

  removeFromCart() {
    // this.addItemToCart.emit();
    this.store.dispatch(removeCart())
  }

  addNumbers(a: number, b: number): number {
    return a + b;
  }
}

