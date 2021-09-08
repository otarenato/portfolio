import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/shared/models';
import { HomeService, HostService } from 'src/shared/services';

import { Observable } from 'rxjs';

interface User {
  user: string;
  password: string;
  user_type: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData!: HomeModel;
  _url: string = '';
  item$!: Observable<User[]>;

  constructor(
    private homeService: HomeService,
    private hostService: HostService) {

    }

  ngOnInit(): void {
    this._url = this.hostService.getDomainUrl();
    this.homeService.getDataHome().subscribe(ret => {
      this.homeData = ret;
    })
  }
}
