import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {
  @Input() cartTotal: number = 0
  prevTotal: number = this.cartTotal
  pulse = false
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.cartTotal !== this.prevTotal) {
      this.pulse = true;
      this.prevTotal = this.cartTotal
    }
  }
}
