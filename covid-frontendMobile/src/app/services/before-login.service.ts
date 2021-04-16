import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

  constructor(private token: TokenService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return !this.token.loggedIn();
   }
}  

