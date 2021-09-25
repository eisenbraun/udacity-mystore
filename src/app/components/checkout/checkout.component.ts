import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
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
    private orderService: OrderService,
    private router: Router  
  ) { }

  submitOrder() {
    const orderId = this.orderService.addToOrders(this.fullName, this.address)
    this.router.navigate([`/confirmation/${orderId}`])
  }

  ngOnInit(): void {
  }

}
