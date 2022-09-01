import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './place-order/Item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  baseUrl = 'localhost:8080/'

  getOrderById(id: string): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + id);
  }

  addOrder(order: any): Observable<Item> {
    console.log("Test");
    return this.http.post<Item>(this.baseUrl + "orders", order);
  }
}
