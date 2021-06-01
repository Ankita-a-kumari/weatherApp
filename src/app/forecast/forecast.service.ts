import { Injectable } from '@angular/core';
import { throwError, Observable, of,Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ApiUrls} from '../shared/apiUrl';
import { map, filter, tap, concat, catchError } from '../../../node_modules/rxjs/operators';
import { DatePipe } from '../../../node_modules/@angular/common';
import {forecast} from './forecast'
@Injectable({
    providedIn:'root'
})

  export class ForecastService {

    constructor(private http:HttpClient) {}
    forecast$:any;
    todayDate =new DatePipe('en-Us').transform(new Date(),'yyyy-MM-dd','en');

// We have two service one for home and another for forecast , generally we can have single service for small application.
// But forecast and home is not related , further going forecast can be individual module which can lazy load later
    getForecastDetails(city:string){
    this.forecast$=this.http.get<any>(`${ApiUrls.forecastWheatherAPI.url}?q=${city}&appid=dbaaacc5cf11d75bc83edadba793d71a`)
    .pipe(
      catchError(this.handleError)
    )
    return this.forecast$;
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