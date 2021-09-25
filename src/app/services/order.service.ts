import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Order } from '../models/Order';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  orders: Order[] = []
  constructor(private cart: CartService) { 
    const ls = localStorage.getItem('orders')
    
    if (ls) {
      this.orders = JSON.parse(ls) as Order[]
    }
  }

  confirmationNumber(): string {
    const number: string[] = []

    for (let i = 0; i < 8; i++) {
      const randomNumber = Math.floor(Math.random() * (91 - 65)) + 65
      number.push(String.fromCharCode(randomNumber))
    }
  
    return number.join('')
  }

  addToOrders(fullName: string, address: string): string {
    const order = {
      id: this.confirmationNumber(),
      fullName,
      address,
      cart: this.cart.getCart(),
      totalPrice: this.cart.totalPrice()
    }

    this.orders.push(order)
    this.saveOrders()
    this.cart.clearCart()
    return order.id
  }

  getOrder(id: string): Order | undefined {
    return this.orders.find(order => order.id === id)
  }

  saveOrders(): void {
    localStorage.setItem('orders', JSON.stringify(this.orders))
  }
}
