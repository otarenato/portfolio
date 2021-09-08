import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeModel } from 'src/shared/models';
import { AuthService } from './auth.service';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public _url: string = '';

  constructor(private http: HttpClient, private hostService: HostService, private teste: AuthService) {}

  getDataHome(): Observable<HomeModel> {
    this._url = this.hostService.getDomainUrl();
    return this.http.get<HomeModel>(`${ this._url }assets/data/home.json`).pipe(map(res => {
      return res;
    }));
  }


}
