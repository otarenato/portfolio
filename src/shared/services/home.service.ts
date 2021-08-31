import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { JobModel } from 'src/shared/models';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  listJobs(): Observable<JobModel[]> {
    return this.http.get<JobModel[]>('https://otarenato.github.io/portfolio/assets/data/home.json').pipe(map(res => {
      return res;
    }));
  }
}
