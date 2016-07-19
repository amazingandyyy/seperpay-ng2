import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Auth } from './auth';

@Component({
    moduleId: module.id,
    selector: 'sp-authForm',
    templateUrl: 'auth.form.component.html',
    styleUrls: ['auth.form.style.css'],
    providers: [AuthService]
})
export class AuthFormComponent implements OnInit {
    constructor(private authService: AuthService) { }

    onSubmit(auth: Auth) {
        this.authService.logUserIn(auth)
            // .subscribe(
            // res => { console.log('good res: ', res) },
            // err => { console.log('err res: ', err) }
    }

    ngOnInit() { }
}