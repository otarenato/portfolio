import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/shared/models';
import { HomeService } from 'src/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData!: HomeModel;
  _url: string = '';

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this._url = this.homeService.getDomainUrl();
    this.homeService.getDataHome().subscribe(ret => {
      this.homeData = ret;
    })
  }
}
