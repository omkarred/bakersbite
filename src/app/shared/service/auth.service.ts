import { Injectable } from '@angular/core';

@Injectable()
export class Auth {

    isLoggedIn:Boolean = false;


    autheticateUser():Promise<Boolean> {

        const s1:Promise<Boolean> = new Promise( (resolve, reject) => {

                setTimeout(()=> {resolve(this.isLoggedIn)}, 800);

        });
        
        return s1;
    }

    logIn() {
        this.isLoggedIn = true;
    }

    logOut(){
        this.isLoggedIn = false;
    }


    isSignedIn():Boolean {
        return this.isLoggedIn;
    }
}