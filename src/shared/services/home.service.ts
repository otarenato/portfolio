import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeModel } from 'src/shared/models';


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

  getDataHome(): Observable<HomeModel> {
    this._url = this.getDomainUrl();
    return this.http.get<HomeModel>(`${ this._url }assets/data/home.json`).pipe(map(res => {
      return res;
    }));
  }
}
