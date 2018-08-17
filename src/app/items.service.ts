import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  urlItems = '/api/items';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.urlItems}/all`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.urlItems}/${id}`);
  }

}
