import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';
import {Login} from '../login';
import {LoginsService} from '../logins.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  login: Login;
  user: User;

  constructor(private loginsSerivce: LoginsService,
              private usersService: UsersService) {}

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {
    this.loginsSerivce.getLogin().subscribe(res => {
      this.login = res;
      this.getUser();
    });
  }

  getUser() {
    this.usersService.getUser(this.login.id).subscribe(res => this.user = res);
  }
}
