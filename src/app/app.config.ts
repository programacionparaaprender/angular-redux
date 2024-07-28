import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from './store/counter.reducer';
import { AppComponent } from './app.component';
import { environment } from './../enviroments/enviroment';


export const appConfig: ApplicationConfig = {
  
  providers: [
    provideStore({ count: counterReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)]
};
