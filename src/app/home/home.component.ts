import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service';
import {User} from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private router: Router,
              private service: UsersService) { }

  ngOnInit() {
    this.getUser();
  }

  goToLoginView() {
    this.router.navigate(['/login']);
  }

  goToSearchView() {
    this.router.navigate(['/search']);
  }

  getUser() {
    this.service.getUser().subscribe(result => this.user = result);
  }
}
