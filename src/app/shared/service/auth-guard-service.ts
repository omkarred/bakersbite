import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateChild} from '@angular/router'
import { Observable } from 'rxjs';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {

    constructor(private authService:Auth, private router:Router) {

    }

    
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute,state);
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
       return this.authService.autheticateUser().then((isAuth:Boolean) => {
            
           return  isAuth === true ? true: this.router.navigate(["app-home-page"]);
        })

    }


    
    
}