import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';
import {Login} from '../login';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  login: Login;
  user: User;

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {
    this.userService.getLogin().subscribe(res => {
      this.login = res;
      this.getUser();
    });
  }

  getUser() {
    this.userService.getUser(this.login.id).subscribe(res => this.user = res);
  }
}
