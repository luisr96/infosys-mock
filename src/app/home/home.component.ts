import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Item } from '../place-order/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private orderService: OrderService) { }

  cart: Item[] = [];

  ngOnInit() {
    this.orderService.order.subscribe( res => {
      this.cart = res;
    })
  }

}
