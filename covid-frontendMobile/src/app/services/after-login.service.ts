import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate{

  constructor(private token:TokenService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
  UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return this.token.loggedIn();
  }
}
