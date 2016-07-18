///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.routes';

import { AppComponent } from "./app.component";
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
    appRouterProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]).catch((err: any) => console.error(err));
