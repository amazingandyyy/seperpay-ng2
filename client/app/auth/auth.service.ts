import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import './rxjs-operators';

@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    // logUserIn() {
    //     return this.http.post('/api/logUserIn')
    //         .then((res: Response))=>{
                
    //         });
    // }

}