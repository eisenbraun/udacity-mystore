import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product
  
  constructor() { 
    this.product = {
      id: 0,
      name: "",
      price: 0.00,
      url: "",
      description: ""
    }
  }

  ngOnInit(): void {
  }

}
