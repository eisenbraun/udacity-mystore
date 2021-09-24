import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product
  
  constructor(private cartService: CartService) { 
    this.product = {
      id: 0,
      name: "",
      price: 0.00,
      url: "",
      description: ""
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product)
  }

  ngOnInit(): void {
  }

}
