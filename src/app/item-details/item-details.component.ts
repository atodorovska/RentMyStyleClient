import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import {Item} from '../item';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item = null;

  constructor(private itemsService: ItemsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(result => {
      const id = +result.get('id');
      this.getItem(id);
    });
  }

  getItem(id: number) {
    this.itemsService.getItem(id).subscribe(result => this.item = result);
  }
}
