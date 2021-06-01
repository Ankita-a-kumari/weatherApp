import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastService } from './forecast.service';
import { map, catchError } from '../../../node_modules/rxjs/operators';
import { DatePipe } from '../../../node_modules/@angular/common';
import { forecast } from './forecast';
import { Observable, of } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  // on Push is allows componenet to check only when @input, @Output,event emits,observable emits ,improves performance
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent implements OnInit {

  constructor(private route:ActivatedRoute, private forecastService:ForecastService) { }
  selectedCity:string;
  forecastDetails:Observable<forecast>;
  errorMessage='';
  todayDate =new DatePipe('en-Us').transform(new Date(),'yyyy-MM-dd','en');

  ngOnInit(): void {
    // it takes data(city name) when router routes from  home to forecast
this.selectedCity=this.route.snapshot.paramMap.get('id');

// this takes response from forecast APi and filter and maps data accordingly and uses async pipe
// this filter gives filtered data of 5 days at 9 o clock.
this.forecastDetails =this.forecastService.getForecastDetails(this.selectedCity).pipe(
  map((filteredList :any={})=>
     filteredList.list.filter((filterItem)=>{
        if(filterItem.dt_txt.split(' ')[0] >= this.todayDate && filterItem.dt_txt.split(' ')[1]==='09:00:00')
     return filterItem;
     })),
 map((item:any={})=> item.map(data=>({
         temparature:(data.main.temp -273).toFixed(2),
         seaLevel:data.main.sea_level,
         date:data.dt_txt.split(' ')[0],
         time: data.dt_txt.split(' ')[1]
         } as forecast))),
         catchError(err => {
          this.errorMessage =  err.error.message;
          return of([]);
        })
)

  }


}
