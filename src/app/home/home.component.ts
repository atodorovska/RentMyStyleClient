import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from '../login';
import {ItemsService} from '../items.service';
import {Item} from '../item';
import {LoginsService} from '../logins.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: Login = null;
  items: Item[] = [];

  constructor(private router: Router,
              private loginsService: LoginsService,
              private itemsService: ItemsService) { }

  ngOnInit() {
    this.getLogin();
    this.getItems();
  }

  goToLoginView() {
    this.router.navigate(['/login']);
  }

  goToSearchView() {
    this.router.navigate(['/search']);
  }

  goToItemDetailsView(id: number) {
    this.router.navigate([`/item-details/${id}`]);
  }

  getLogin() {
    this.loginsService.getLogin().subscribe(result => this.login = result);
  }

  getItems() {
    this.itemsService.getItems().subscribe(result => this.items = result);
  }
}
