import { Component, OnInit } from '@angular/core';
import { JobModel } from 'src/shared/models';
import { HomeService } from 'src/shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listJobs: JobModel[] = [];
  _url: string = '';

  constructor(public homeService: HomeService) { }

  ngOnInit(): void {
    this._url = this.homeService.getDomainUrl();
    this.homeService.listJobs().subscribe(ret => {
      this.listJobs = ret;
    })
  }

}
