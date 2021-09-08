import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  users: UserModel[] = [];
  constructor(private _usersService: UsersService, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    const _users = from(this._usersService.getUsers()) ;
    _users.subscribe(res => {
      this.isUserLoggedIn = !!res.find(itm => itm.user === username && itm.password === password);
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
      if (this.isUserLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    })
    return of(this.isUserLoggedIn);
  }

  backToHome(): void {
    localStorage.removeItem('isUserLoggedIn');
    this.router.navigate(['/home']);
  }
}


