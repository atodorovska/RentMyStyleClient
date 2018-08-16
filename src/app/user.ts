import {Item} from './item';

export class User {

  id: string;
  name: string;
  items: Item[];

  constructor(id: string, name: string, items: Item[]) {
    this.id = id;
    this.name = name;
    this.items = items;
  }
}
