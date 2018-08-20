import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {Item} from '../item';
import {LoginsService} from '../logins.service';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  login: Login = null;
  items: Item[] = [];
  price: number;

  constructor(private loginsService: LoginsService,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.getLogin();
    this.getAllItems();
  }


  getLogin() {
    this.loginsService.getLogin().subscribe(result => this.login = result);
  }

  getAllItems() {
    this.itemsService.getItems().subscribe(res=> this.items = res);
  }

  search(brand:string, size:string){
    if(brand != undefined){
      this.itemsService.getItemsByBrand(brand).subscribe(res=> this.items = res);
      return;
    }

    if(size != undefined){
      this.itemsService.getItemsBySize(size).subscribe(res=> this.items = res);
      return;
    }

    if(this.price != undefined){
      this.itemsService.getItemsByPrice(this.price).subscribe(res=> this.items = res);
      return;
    }
  }

  getByColor(color: string){
    this.itemsService.getItemsByColor(color).subscribe(res=> this.items = res);
  }


}
