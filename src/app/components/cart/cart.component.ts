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
  constructor(private cartService: CartService) { }

  removeItem(item: Item): void {
    this.cartService.removeItem(item)
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart()
  }

}
