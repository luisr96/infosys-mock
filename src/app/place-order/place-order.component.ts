import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { OrderService } from '../order.service';
import { Item } from './Item';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  cart: Item[] = [];

  constructor(private orderService: OrderService,
              private dataService: DataService) { }


  ngOnInit() {
    this.orderService.order.subscribe( res => {
      this.cart = res;
    })
  }

  items: Item[] = [
    {
      name: 'Pizza',
      description: 'Large pepperoni pizza with extra cheese',
      price: 9.99,
      isChecked: false,
    },
    {
      name: 'Cheeseburger',
      description: 'A plain cheeseburger',
      price: 3.59,
      isChecked: false,
    },
    {
      name: 'Soup',
      description: 'Chicken noodle soup',
      price: 7.99,
      isChecked: false,
    },
    {
      name: 'Chicken Nuggets',
      description: 'Ten piece chicken nuggets',
      price: 5.19,
      isChecked: false,
    },
    {
      name: 'Filet mignon',
      description: 'A good steak',
      price: 59.99,
      isChecked: false,
    },
    
  ];

  areAllUnchecked = (item: any) => item['isChecked'] === false;

  onSubmit(form: any) {
    if (this.items.every(this.areAllUnchecked)) {
      alert("Select at least 1 product.");
      return;
    }

    for (let item of this.items) {
      if (item.isChecked) {
        this.cart.push(item);
      } 
    }

    this.orderService.changeOrder(this.cart);
    console.log(this.cart);

    this.dataService.addOrder(JSON.stringify(this.cart))
        .subscribe(item => this.cart.push(item));
    
  }

}
