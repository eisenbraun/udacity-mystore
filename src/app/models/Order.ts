import { Item } from "./Item";
export class Order {
  id: string;
  fullName: string;
  address: string;
  cart: Item[];
  totalPrice: number

  constructor () {
    this.id = ''
    this.fullName = ''
    this.address = ''
    this.cart = []
    this.totalPrice = 0
  }
}

