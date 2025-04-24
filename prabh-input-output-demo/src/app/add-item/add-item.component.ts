import { Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-item',
  imports: [],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
  standalone: true
})
export class AddItemComponent implements OnInit{
  @Output() addItemToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addItemToCart.emit();
  }
}

