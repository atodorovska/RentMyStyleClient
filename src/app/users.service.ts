import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from '../../node_modules/rxjs';
import {User} from './user';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  urlLogin = '/api/user';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<any>(`${this.urlLogin}`)
      .pipe(map(obj => {
        return new User(obj.userAuthentication.details.id, obj.userAuthentication.details.login != null
          ? obj.userAuthentication.details.login : obj.userAuthentication.details.name);
      }));
  }

}
