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
import { fetchMoviesByMoodEffect } from './store/recommendation/recommendation.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEffects({ fetchMoviesByMoodEffect }),
    provideStore<StoreState>({
      mood: moodReducer,
      recommendation: recommendationReducer,
    }),
    provideHttpClient(),
  ],
};
