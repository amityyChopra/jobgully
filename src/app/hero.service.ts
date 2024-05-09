import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';


@Injectable({ providedIn: 'root' })
export class HeroService {

  private base_Url='https://jobgully.hrtrunk.com/api/v1/hello/'
  private base_image_url = 'https://jobgully.com/img/uploads';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  Service_Provider(type:string,data:any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
     });
     return new Promise((resolve, reject) => {
       this.http.post<any>(this.base_Url+type, JSON.stringify(data),{"headers":headers})
         .subscribe({
            next :(response) => {resolve(response)},
         });
     });
  }
 


}
