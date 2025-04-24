import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  cart: any[] = [];

  subscribeToChildEmitter(componentRef: any) {
    componentRef.addToHeaderCart.subscribe((item: any) => {
      this.cart.push(item);
    });
  }
}
