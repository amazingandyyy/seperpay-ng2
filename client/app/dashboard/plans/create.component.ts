import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Plan } from './plan';

@Component({
    moduleId: module.id,
    selector: 'sp-create',
    templateUrl: 'create.component.html',
    styleUrls: ['plans.style.css']
})
export class CreateComponent {
    constructor() { }

    intervalType = '';
    plan = new Plan(0, 0, '', 3);

    onSubmit(plan: any) {
        console.log('plan: ', plan);
    }

    intervalSelected(interval: string){
        console.log('interval: ', interval);
        this.plan.intervalType = interval;
        this.intervalType = interval
    }

    showCurrency(singlePayment: number){
        return `$${(~~(singlePayment*100)/100)}`
    }
}
