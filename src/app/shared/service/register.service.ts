import { HttpClient, HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';


@Injectable()
export class Registration{

    constructor(private http:HttpClient){}


    public resgisterUser(userData:any):Observable<any> {
        return this.http.post("http://localhost:8080/user/registration", userData);
    }


    public fetchUser(email:string):Observable<any> {
        let httpParams = new HttpParams();
        httpParams.append("email", email);
        return this.http.get("http://localhost:8080/user/fetchuser", {params:httpParams});
    }
}