import { Component, OnInit } from '@angular/core';
import { AuthFormComponent } from './auth.form.component';

@Component({
    moduleId: module.id,
    selector: 'auth',
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.style.css'],
    directives: [AuthFormComponent]
})

export class AuthComponent {
    auth_enter(auth) {
        console.log('submitted');
        console.log('auth: ', auth);
    }
}