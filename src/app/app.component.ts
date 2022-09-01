import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { Item } from './place-order/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private orderService: OrderService) {}

  cart: Item[] = [];

  ngOnInit() {
    this.orderService.order.subscribe( res => {
      this.cart = res;
    })
  }
}
