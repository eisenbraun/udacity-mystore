import { Component, SimpleChanges } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cartTotal: number = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartTotal = this.cartService.totalItems()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  } 

  ngDoCheck() {
    this.cartTotal = this.cartService.totalItems()
  }
}
