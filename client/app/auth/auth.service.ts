import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Auth } from './auth'
import 'rxjs/operator';

@Injectable()
export class AuthService {

    constructor(public http: Http) { }

    logUserIn(data: Auth): Promise<Response> {
        console.log(data);
        return this.http.post('/api/auth/logUserIn', data)
            .toPromise()
            .then((res: Response) => console.log(res))
            .catch((err: any) => console.log('err when logUserIn @auth.service.ts'));
    }
}