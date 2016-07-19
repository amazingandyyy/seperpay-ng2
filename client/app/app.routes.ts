import { provideRouter, RouterConfig } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './dashboard/payment/payment.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { AccountComponent } from './dashboard/account/account.component';

let routes: RouterConfig = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    data: {
      item: {
        title: 'login',
        description: 'login to dashboard'
      }
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'payment',  component: PaymentComponent },
      { path: 'plans',     component: PlansComponent },
      { path: 'account',     component: AccountComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/',
    terminal: true
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];

// tutorials: http://plnkr.co/edit/5ATJapZqtV5ieLJx4f2o?p=preview