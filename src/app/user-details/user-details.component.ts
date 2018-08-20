import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {User} from '../user';
import {LoginsService} from '../logins.service';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  login: Login;
  user: User;
  userToReview: User;

  constructor(private loginsSerivce: LoginsService,
              private usersService: UsersService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getLogin();
    this.getUserToReview();
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

  getUserToReview() {

    this.route.paramMap.subscribe(result => {
      const id = result.get('id');
      this.usersService.getUser(id).subscribe(user => {
        this.userToReview = user;
      });
    });
  }

  openForm() {
    document.getElementById('uploadReview').style.display = 'block';
  }

  closeForm() {
    document.getElementById('uploadReview').style.display = 'none';
  }

  addReview() {
    console.log('Review added!');
  }

}
