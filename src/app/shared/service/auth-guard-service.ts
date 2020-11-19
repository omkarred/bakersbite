import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router'
import { Observable } from 'rxjs';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService:Auth, private router:Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
       return this.authService.autheticateUser().then((isAuth:Boolean) => {
            
           return  isAuth === true ? true: this.router.navigate(["user-not-authenticated"]);
        })

    }

    
}