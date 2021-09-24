// @ts-nocheck
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

  updateCart(product: Item, quantity: number | string) {
    let item = this.getItem(product)
    if (item) {
      item.quantity = this.num(quantity)
    }
  }

  addToCart(product: Product, quantity:number = 1): void {
    let item = this.getItem(product)

    if (item) {
      item.quantity += quantity
    } else {
      item = {
        ...product,
        quantity: quantity
      }
      this.cart.push(item)
    }
    // localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  getItem(product: Product): Item | undefined {
    return this.cart.find(item => item.id === product.id)
  }

  removeItem(product: Item): void {
    const index = this.cart.findIndex(item => item.id === product.id)
    this.cart.splice(index, 1)
    // localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  num(i: number | string): number {
    if (typeof i === 'string') {
      return parseInt(i)
    } 
    return i
  } 

  totalItems(): number {
    return this.cart.reduce((total, item) => (total + this.num(item.quantity)), 0)
  }

  totalPrice(): number {
    return (this.cart.reduce((total, item) => (total + item.price * this.num(item.quantity)), 0)).toFixed(2)
  }

  clearCart(): void {
    this.cart = []
  }

  save(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}
