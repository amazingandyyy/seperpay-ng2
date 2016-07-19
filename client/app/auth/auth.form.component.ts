import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Auth } from './auth';

@Component({
    moduleId: module.id,
    selector: 'sp-authForm',
    templateUrl: 'auth.form.component.html',
    styleUrls: ['auth.form.style.css']
})
export class AuthFormComponent {
    onSubmit(auth: Auth) {
        console.log('submitted');
        console.log('auth: ', auth);
    }
}