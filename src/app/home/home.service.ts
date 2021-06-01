import { Injectable } from '@angular/core';
import { switchMap, catchError } from '../../../node_modules/rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ApiUrls} from '../shared/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
 product$:any;

 // Api call using switchMAp, as it hepls user to be more reactive with page
 // In case user clicks on one city and then quickly clicks on other before subscription is complete,
 // switch map will unsubscribe last click and take latest one

 dailyWeatherAPI(city:string){
    this.product$ = of(city).pipe(
      switchMap(item => this.http.get<any>(`${ApiUrls.currentWheatherAPI.url}?q=${item}&appid=dbaaacc5cf11d75bc83edadba793d71a`))
    ),
    catchError(this.handleError)
return this.product$
    }


private handleError(err: any): Observable<never> {
      let errorMessage: string;
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        errorMessage = `API error ${err.status}: ${err.body.error}`;
      }
      console.error(err);
      return throwError(errorMessage);
    }
}
