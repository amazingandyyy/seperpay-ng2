import { provideRouter, RouterConfig } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { AuthComponent } from './auth/auth.component';

let routes: RouterConfig = [
  {
    path: 'landing',
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
    path: '**',
    redirectTo: '',
    terminal: true
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];

// tutorials: http://plnkr.co/edit/5ATJapZqtV5ieLJx4f2o?p=preview