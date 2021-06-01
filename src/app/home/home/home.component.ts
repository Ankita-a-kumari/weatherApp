import { Component } from '@angular/core';
import {citites,dailyWeatherUpdate} from './city';
import { Observable, of } from '../../../../node_modules/rxjs';
import {HomeService} from '../home.service';
import { DatePipe } from '../../../../node_modules/@angular/common';
import { map, catchError } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private homeService: HomeService) { }
  // citites are constant with list of all cities.
  // In case we want to add more cities we can .
  // we use new Set to avoid repeated cities.
  cityTiles = new Set(citites);
  dailyWeatherData:Observable<dailyWeatherUpdate>;
  errorMessage='';


// this method calls current API which gives data of selected city on home page.
// all mapping and filter should be done on componenet side until it is reqiured at root level.
// dailyWeatherData uses async pipe which subscribes and unsubscribes automatically
ViewdailyWeather(city) {
  this.dailyWeatherData = this.homeService.dailyWeatherAPI(city).pipe(
    map((dailyWeather:any={})=> ({
          name:dailyWeather.name,
          temparature: (dailyWeather.main.temp - 273).toFixed(2),
          timezone:dailyWeather.timezone,
          sunrise: new DatePipe('en-Us').transform(dailyWeather.sys.sunrise*1000,'h:mm:ss a z') ,
          sunset:new DatePipe('en-Us').transform(dailyWeather.sys.sunset*1000,'h:mm:ss a z'),
    } ) as dailyWeatherUpdate),
    catchError(err => {
      this.errorMessage =  err.error.message;
      return of([]);
    })
  )
    }

}


