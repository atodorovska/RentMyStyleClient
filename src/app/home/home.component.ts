import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';
import {Login} from '../login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: Login;

  constructor(private router: Router,
              private service: UsersService) { }

  ngOnInit() {
    this.getLogin();
  }

  goToLoginView() {
    this.router.navigate(['/login']);
  }

  goToSearchView() {
    this.router.navigate(['/search']);
  }

  getLogin() {
    this.service.getLogin().subscribe(result => this.login = result);
  }
}
