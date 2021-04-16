import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate{


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
  UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return this.token.loggedIn();
  }

  constructor(private token:TokenService){

  }
}
