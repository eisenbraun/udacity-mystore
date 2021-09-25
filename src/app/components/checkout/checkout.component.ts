import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  fullName: string = ''
  creditCard: string = ''
  address: string = ''

  constructor(
    private cartService: CartService,
    private router: Router  
  ) { }

  submitOrder() {
    this.cartService.clearCart()
    this.router.navigate(['/confirmation'])
  }

  ngOnInit(): void {
  }

}
