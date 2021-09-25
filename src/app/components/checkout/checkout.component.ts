import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  fullName: string = ''
  creditCard: string = ''
  address: string = ''

  constructor(private cartService: CartService) { }

  submitOrder() {
    this.cartService.clearCart()
    
  }

  ngOnInit(): void {
  }

}
