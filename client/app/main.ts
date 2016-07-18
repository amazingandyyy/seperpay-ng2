///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from "./app.component";
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    disableDeprecatedForms(),
    provideForms()
]).catch((err: any) => console.error(err));
