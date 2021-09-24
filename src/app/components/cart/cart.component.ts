// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Item[] = []

  constructor(
      private cartService: CartService
  ) { }

  range(i: number): number[] {
    return new Array(i + 5)
  }

  updateCart(quantity, item: Item): void {
    this.cartService.updateCart(item, quantity)
    this.cart = this.cartService.getCart()
  }

  removeItem(item: Item): void {
    this.cartService.removeItem(item)
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
  }

}
