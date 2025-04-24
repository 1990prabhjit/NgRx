import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent implements OnInit{
  cart = 0;
  

  constructor(private router: Router, private store: Store<{cartCount: number}>) { }

  ngOnInit(): void {
    const cartStore = this.store.select('cartCount');
    cartStore.subscribe((e) => {
      this.cart = e;
      console.log('Count Updated From Store');
    });
  }

  goToFruits() {
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.router.navigate(['vegetables']);
  }
}
