import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-item',
  imports: [AddItemComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  standalone: true
})
export class ItemComponent {
  @Input() item: any;

  @Output() addThisItemToCart = new EventEmitter();

  constructor() { }

  addToCart() {
    this.addThisItemToCart.emit(this.item);
  }
}
