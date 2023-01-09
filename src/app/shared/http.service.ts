import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getGamesList(
    ordering: string,
    search? : string
  ): Observable<any>{
    let params = new HttpParams().set('ordering' , ordering);

    if(search){
      params = new HttpParams().set('ordering' , ordering).set('search', search)
    }
    return this.http.get(`${environment.BASE_URL}/games` , {
      params: params
    })
  }
}
