import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service.getUser().subscribe(res => this.user = res);
  }

}
