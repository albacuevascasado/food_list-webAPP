import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiURL = "http://localhost:5001/items";

  constructor(private httpClient:HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.apiURL);
  }

  addItem(item:Item): Observable<Item> {
    return this.httpClient.post<Item>(this.apiURL, item);
  }

  deleteItem(item:Item): Observable<Item> {
    const url = `${this.apiURL}/${item.id}`;
    return this.httpClient.delete<Item>(url);
  }

  updateItem(item:Item): Observable<Item> {
    const url = `${this.apiURL}/${item.id}`;
    return this.httpClient.put<Item>(url, item);
  }
}
