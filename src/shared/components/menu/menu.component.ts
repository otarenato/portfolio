import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {

  }

  logout() {
    this._authService.logout();
  }

}
