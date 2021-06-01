import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { RouteGaurdGuard } from './shared/route-gaurd.guard';



const routes: Routes = [
   {path: 'home',
   component: HomeComponent},

   {path: 'forecast/:id',
   canActivate:[RouteGaurdGuard],// route gaurd so that if user randomly types anything on forecast url it will navigate to homepage
   component: ForecastComponent},

   {path: '' ,
   component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
