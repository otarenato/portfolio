import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { JobModel } from 'src/shared/models';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public _url: string = '';
  constructor(private http: HttpClient) {}

  getDomainUrl(): string {
    const host = window.location.hostname;
    const url = host === 'localhost' ? '../../' : 'https://otarenato.github.io/portfolio/';
    return url;
  }

  listJobs(): Observable<JobModel[]> {
    this._url = this.getDomainUrl();
    return this.http.get<JobModel[]>(`${ this._url }assets/data/home.json`).pipe(map(res => {
      return res;
    }));
  }
}
