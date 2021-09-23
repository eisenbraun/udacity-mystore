import { TestBed } from '@angular/core/testing';
import { Product } from '../models/Product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let product: Product;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);

    product = {
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!"
    }

    localStorage.removeItem('cart')
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getItem should return undefined', () => {
    service.clearCart()
    expect(service.getItem(product)).toBeUndefined()
  })

  it('addToCart should add item to localStorage', () => {
    service.clearCart()
    service.addToCart(product)
    expect(JSON.parse(localStorage.getItem('cart') as string)).toEqual([{
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!",
      "quantity": 1
    }])
  })

  it('getItem should return object', () => {
    service.clearCart()
    service.addToCart(product)
    expect(service.getItem(product)).toEqual({
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!",
      "quantity": 1
    })
  })
  
  it('addToCart should increase quantity', () => {
    service.clearCart()
    service.addToCart(product)
    service.addToCart(product)
    expect(service.getItem(product)?.quantity).toBe(2)
  })
});
