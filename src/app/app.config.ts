import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { moodReducer } from './store/mood/mood.reducer';
import { StoreState } from './store/store.model';
import { recommendationReducer } from './store/recommendation/recommendation.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects(),
    provideStore<StoreState>({
      mood: moodReducer,
      recommendation: recommendationReducer,
    }),
  ],
};
