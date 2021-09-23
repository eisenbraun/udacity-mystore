import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Item[] = []

  constructor() { 
    const ls = localStorage.getItem('cart')
    if (ls) {
      this.cart = JSON.parse(ls) as Item[]
    } 
  }

  getCart(): Item[] {
    return this.cart
  }

  addToCart(product: Product): void {
    let item = this.getItem(product)

    if (item) {
      item.quantity++
    } else {
      item = {
        ...product,
        quantity: 1
      }
      this.cart.push(item)
    }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  getItem(product: Product): Item | undefined {
    return this.cart.find(item => item.id === product.id)
  }

  clearCart(): void {
    this.cart = []
  }
}
