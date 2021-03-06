import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  products: Product[] = []
  product: Product = {
    id: 0,
    name: '',
    price: 0.00,
    url: '',
    description: ''
  }
  quantity: string = '1'
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }


  addToCart(): void {
    this.cartService.addToCart(this.product, parseInt(this.quantity) as number)
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string)
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      this.product = this.products.find(product => product.id === this.id) as Product 
    }); 
  }

}
