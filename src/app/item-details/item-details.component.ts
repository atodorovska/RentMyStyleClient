import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import {Item} from '../item';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item = null;
  owner: User = null;

  constructor(private itemsService: ItemsService,
              private usersService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(result => {
      const id = +result.get('id');
      this.getItem(id);
    });
  }

  getItem(id: number) {
    this.itemsService.getItem(id).subscribe(result => {
      this.item = result;
      this.getOwner(this.item.owner);
    });
  }

  getOwner(user: string) {
    this.usersService.getUser(user).subscribe(result => this.owner = result);
  }
}
