import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Item } from '../place-order/Item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  cart: Item[] = [];
  paid: boolean = false;

  ngOnInit() {
    this.orderService.order.subscribe( res => {
      this.cart = res;
    })
  }

  calcTotalPrice() {
    return this.cart
      .map(item => item.price)
      .reduce((a, b) => a + b, 0);
  }

  onPayNow() {
    this.paid = true;
  }

}
