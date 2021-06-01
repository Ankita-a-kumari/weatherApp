import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { RouterTestingModule } from '../../node_modules/@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterTestingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
