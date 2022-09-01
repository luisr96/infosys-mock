import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './place-order/Item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderSource = new BehaviorSubject<Array<any>>([]);
  order = this.orderSource.asObservable();

  baseUrl = "localhost:8080/"

  constructor() { }

  changeOrder(newOrder: any) {
    this.orderSource.next(newOrder);
  }
  
}
