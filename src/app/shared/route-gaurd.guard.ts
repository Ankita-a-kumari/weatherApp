import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { citites } from '../home/home/city';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdGuard implements CanActivate {
  constructor(private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = route.paramMap.get('id');
      if(citites.indexOf(id)!==-1)
      {
          return true;
      }
      else {
          this.router.navigate(['']);
          return false;
      }
  }
}
